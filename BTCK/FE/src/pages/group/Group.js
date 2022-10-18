import { connect } from "react-redux";
import ToolkitProvider from "react-bootstrap-table2-toolkit";
import React, { useEffect, useState } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import {
  getListGroupAction,
  updateSelectedRowsAction,
} from "../../redux/actions/GroupAction";
import GroupApi from "../../api/GroupApi";
import * as Yup from "yup";
import { FastField, Form, Formik } from "formik";
import { toastr } from "react-redux-toastr";
import { ReactstrapInput } from "reactstrap-formik";
import {
  selectGroups,
  selectPage,
  selectSelectedRows,
  selectSize,
  selectTotalSize,
} from "../../redux/selectors/GroupSelector";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import CustomSearch from "./CustomSearch";
import * as Icon from "react-feather";
import CustomFilter from "./CustomFilter";

const Group = (props) => {
  const getListGroup = props.getListGroupAction;

  const size = props.size;

  useEffect(() => {
    const getAllGroup = async () => {
      const result = await GroupApi.getAll(1, size);
      const groups = result.content;
      const totalSize = result.totalElements;
      getListGroup(groups, totalSize, 1);
    };
    getAllGroup();
  }, [getListGroup, size]);

  const actionFormatter = (cell, row, rowIndex) => {
    console.log(row);
    return (
      <Icon.Edit2
        className=" align-middle mr-2 "
        size={16}
        onClick={() => updateGroup(row.id)}
      />
    );
  };
  const tableColumns = [
    {
      dataField: "name",
      text: "Name",
      sort: true,
    },
    {
      dataField: "totalMember",
      text: "Total Member",
      sort: true,
    },
    {
      dataField: "action",
      text: "",
      formatter: actionFormatter,
      headerStyle: (colum, colIndex) => {
        return { width: "40px", textAlign: "center" };
      },
    },
  ];

  const handleTableChange = async (
    type,
    { page, sortField, sortOrder, searchText }
  ) => {
    if (
      sortField === null ||
      sortField === undefined ||
      sortOrder === null ||
      sortOrder === undefined
    ) {
      sortField = "id";
      sortOrder = "desc";
    }

    const result = await GroupApi.getAll(
      page,
      size,
      sortField,
      sortOrder,
      searchText
    );
    const groups = result.content;
    const totalSize = result.totalElements;
    getListGroup(groups, totalSize, page, searchText);
  };

  const [isvisiableFilter, setVisiableFilter] = useState(false);

  const refreshFrom = () => {
    // Refresh selected
    // props.updateSelectedRowsAction([]);

    handleTableChange(null, {
      page: 1,
      sortField: null,
      sortOrder: null,
      searchText: null,
    });
  };

  // create

  const [isopenModalCreate, setOpenModalCreate] = useState(false);

  const showNotification = (title, message) => {
    const options = {
      timeOut: 3000,
      showCloseButton: false,
      progressBar: false,
      position: "top-right",
    };
    // show notification
    toastr.success(title, message, options);
  };

  const showErrorNotification = (title, message) => {
    const options = {
      timeOut: 3000,
      showCloseButton: false,
      progressBar: false,
      position: "top-right",
    };
    // show notification
    toastr.error(title, message, options);
  };
  // update group

  const [groupUpdateInfor, setGroupUpdateInfor] = useState();

  const updateGroup = async (groupId) => {
    setOpenModalUpdate(true);
    const groupInfor = await GroupApi.getById(groupId);
    setGroupUpdateInfor(groupInfor);
  };

  const [isopenModalUpdate, setOpenModalUpdate] = useState(false);

  // delete group

  const handleOnSelect = (row, isSelect) => {
    console.log(row, isSelect);

    let selected = props.selectedRows;
    console.log(selected);
    if (isSelect) {
      selected = [...props.selectedRows, row.id];
    } else {
      selected = props.selectedRows.filter((x) => x !== row.id);
    }
    props.updateSelectedRowsAction(selected);
  };

  const handleOnSelectAll = (isSelect, rows) => {
    let selected = props.selectedRows;
    const ids = rows.map((r) => r.id);
    if (isSelect) {
      selected = ids;
    } else {
      selected = [];
    }
    props.updateSelectedRowsAction(selected);
  };

  const deleteGroup = async () => {
    if (props.selectedRows.length !== 0) {
      try {
        await GroupApi.deleteByIds(props.selectedRows);
        showNotification("Delete Group", "Delete Group Successfully!");
        refreshFrom();
      } catch (error) {
        console.log(error);
        props.history.push("/auth/500");
      }
    } else {
      showErrorNotification("Delete Group", "You Must Be Select Group");
    }
  };

  return (
    <Container fluid className="p-0">
      <h1 className="h3 mb-3">Group Management</h1>
      <Row>
        <Col>
          <Card>
            <CardBody>
              <ToolkitProvider
                keyField="id"
                data={props.groups}
                columns={tableColumns}
                search
              >
                {(toolkitprops) => (
                  <>
                    {/* filter */}
                    {isvisiableFilter && (
                      <Row>
                        <Col lg="12">
                          <CustomFilter />
                        </Col>
                      </Row>
                    )}

                    {/*search*/}
                    <Row style={{ alignitems: "center" }}>
                      <Col lg="2">
                        <CustomSearch {...toolkitprops.searchProps} />
                      </Col>
                      <Col lg="10">
                        <div className="float-right pull-right">
                          <Icon.Filter
                            className=" align-middle mr-2 "
                            size={24}
                            onClick={() => setVisiableFilter(!isvisiableFilter)}
                          />
                          <Icon.RefreshCcw
                            className=" align-middle mr-2 "
                            size={24}
                            onClick={refreshFrom}
                          />
                          <Icon.PlusCircle
                            className=" align-middle mr-2 "
                            size={24}
                            onClick={() => setOpenModalCreate(true)}
                          />
                          <Icon.Trash2
                            className=" align-middle mr-2 "
                            size={24}
                            onClick={deleteGroup}
                          />
                        </div>
                      </Col>
                    </Row>
                    <BootstrapTable
                      {...toolkitprops.baseProps}
                      bootstrap4
                      striped
                      hover
                      bordered={true}
                      remote
                      pagination={paginationFactory({
                        page: props.page,
                        sizePerPage: props.size,
                        totalSize: props.totalSize,
                        hideSizePerPage: true,
                        nextPageText: ">",
                        prePageText: "<",
                        withFirstAndLast: false,
                        alwaysShowAllBtns: true,
                      })}
                      selectRow={{
                        mode: "checkbox",
                        clickToSelect: true,
                        selected: props.selectedRows,
                        onSelect: handleOnSelect,
                        // onSelectAll: handleOnSelectAll,
                      }}
                      onTableChange={handleTableChange}
                    />
                  </>
                )}
              </ToolkitProvider>
            </CardBody>
          </Card>
        </Col>
      </Row>

      <Modal isOpen={isopenModalCreate}>
        <Formik
          initialValues={{
            name: "",
          }}
          validationSchema={Yup.object({
            name: Yup.string()
              .min(6, "Must be between 6 and 50 characters or greater")
              .max(50, "Must be between 6 and 50 characters or greater")
              .required("Required")
              .test(
                "checkUniqueName",
                "This Username is already registed.",
                async (name) => {
                  // call api
                  const isExists = await GroupApi.existsByName(name);
                  return !isExists;
                }
              ),
          })}
          onSubmit={async (values) => {
            //try{
            await GroupApi.create(values.name);
            showNotification("Create Group", "Create Group Successfully");
            // close modal
            setOpenModalCreate(false);
            // refresh table
            refreshFrom();

            // }catch (error){
            //  console.log(error);setOpenModal(false)
            // props.history.push("/auth/500")}
          }}
          validateOnChange={false}
          validateOnBlur={false}
        >
          {({ isSubmitting }) => (
            <Form>
              {/* header */}
              <ModalHeader>Create Group</ModalHeader>

              {/* body */}
              <ModalBody className="m-3">
                <Row style={{ alignItems: "center" }}>
                  <Col lg="auto">
                    <label>Group Name:</label>
                  </Col>

                  <Col>
                    <FastField
                      type="text"
                      bsSize="lg"
                      name="name"
                      placeholder="Enter gruop name"
                      component={ReactstrapInput}
                    />
                  </Col>
                  {"-"}
                </Row>
              </ModalBody>
              {/* footer */}
              <ModalFooter>
                <Button type="submit" color="primary" disable={isSubmitting}>
                  Save
                </Button>{" "}
                <Button
                  color="primary"
                  onClick={() => setOpenModalCreate(false)}
                >
                  Close
                </Button>
              </ModalFooter>
            </Form>
          )}
        </Formik>
      </Modal>

      <Modal isOpen={isopenModalUpdate}>
        <Formik
          enableReinitialize
          initialValues={{
            name:
              groupUpdateInfor && groupUpdateInfor.name
                ? groupUpdateInfor.name
                : "",
            totalMember:
              groupUpdateInfor &&
              groupUpdateInfor.totalMember !== undefined &&
              groupUpdateInfor.totalMember !== null
                ? groupUpdateInfor.totalMember
                : "",
          }}
          validationSchema={Yup.object({
            name: Yup.string()
              .min(6, "Must be between 6 and 50 characters or greater")
              .max(50, "Must be between 6 and 50 characters or greater")
              .required("Required")
              .test(
                "checkUniqueName",
                "This Username is already registed.",
                async (name) => {
                  if (name === groupUpdateInfor.name) {
                    return true;
                  }

                  // call api
                  const isExists = await GroupApi.existsByName(name);
                  return !isExists;
                }
              ),
            totalMember: Yup.number()
              .positive("Must be between than 0 ")
              .integer("Must be between than 0 "),
          })}
          onSubmit={async (values) => {
            //try{
            await GroupApi.update(
              groupUpdateInfor.id,
              values.name,
              values.totalMember
            );
            showNotification("Update Group", "Update Group Successfully");
            // close modal
            setOpenModalUpdate(false);
            // refresh table
            refreshFrom();

            // }catch (error){
            //  console.log(error);setOpenModal(false)
            // props.history.push("/auth/500")}
          }}
          validateOnChange={false}
          validateOnBlur={false}
        >
          {({ isSubmitting }) => (
            <Form>
              {/* header */}
              <ModalHeader>Update Group</ModalHeader>

              {/* body */}
              <ModalBody className="m-3">
                <Row style={{ alignItems: "center" }}>
                  <Col lg="auto">
                    <label>Group Name:</label>
                  </Col>

                  <Col>
                    <FastField
                      type="text"
                      bsSize="lg"
                      name="name"
                      placeholder="Enter group name"
                      component={ReactstrapInput}
                    />
                  </Col>
                  {"-"}
                </Row>

                <Row style={{ alignItems: "center" }}>
                  <Col lg="auto">
                    <label>Total Member:</label>
                  </Col>

                  <Col>
                    <FastField
                      type="number"
                      bsSize="lg"
                      name="totalMember"
                      placeholder="Enter Total Member"
                      component={ReactstrapInput}
                    />
                  </Col>
                  {"-"}
                </Row>
              </ModalBody>
              {/* footer */}
              <ModalFooter>
                <Button type="submit" color="primary" disable={isSubmitting}>
                  Save
                </Button>{" "}
                <Button
                  color="primary"
                  onClick={() => setOpenModalUpdate(false)}
                >
                  Close
                </Button>
              </ModalFooter>
            </Form>
          )}
        </Formik>
      </Modal>
    </Container>
  );
};
const mapGlobalStateToProps = (state) => {
  return {
    groups: selectGroups(state),
    page: selectPage(state),
    size: selectSize(state),
    totalSize: selectTotalSize(state),
    selectedRows: selectSelectedRows(state),
  };
};
export default connect(mapGlobalStateToProps, {
  getListGroupAction,
  updateSelectedRowsAction,
})(Group);
