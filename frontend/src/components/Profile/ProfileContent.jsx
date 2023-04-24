import React, { useState } from "react";
import { backend_url } from "../../server";
import { useSelector } from "react-redux";
import { AiOutlineArrowRight, AiOutlineCamera } from "react-icons/ai";
import { DataGrid } from "@material-ui/data-grid";
import { Button } from "@material-ui/core";
import styles from "../../styles/style";
import { Link } from "react-router-dom";

const ProfileContent = ({ active }) => {
  const {user} = useSelector((state) => state.user);
  const [name, setName] = useState(user && user.name);
  const [email, setEmail] = useState(user && user.email);
  const [phoneNumber, setPhoneNumber] = useState();
  const [zipcode, setZipCode] = useState();
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="w-full">
      {/* Profile page */}
      {active === 1 && (
        <>
        <div className="flex justify-center w-full">
          <div className="relative">
            <img src={`${backend_url}${user?.avatar}`}
              className="w-[150px] h-[150px] rounded-full object-cover border-[3px] border-[#0eae88]" alt=""/>

              <div className="w-[30px] h-[30px] bg-[#E3E9EE] rounded-full flex items-center justify-center cursor-pointer absolute bottom-[5px] right-[5px] ">
                <AiOutlineCamera />
              </div>
          </div>
        </div>

        <br />
        <br />

        <div className="w-full px-5">
            <form onSubmit={handleSubmit} aria-required={true}>
              <div className="w-full flex pb-3">
                <div className="w-[50%]">
                  <label className="block pb-2"> Full Name</label>
                  <input type="text" className={`${styles.input} !w-[95%]`} value={name} onChange={(e) => setName(e.target.value)}/>
                </div>

                <div className="w-[50%]">
                  <label className="block pb-2">Email Address</label>
                  <input type="text" className={`${styles.input} !w-[95%]`} value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
              </div>

              <div className="w-full flex pb-3">
                <div className="w-[50%]">
                  <label className="block pb-2">Phone Number</label>
                  <input type="number" className={`${styles.input} !w-[95%]`} value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}/>
                </div>

                <div className="w-[50%]">
                  <label className="block pb-2">Zip Code</label>
                  <input type="text" className={`${styles.input} !w-[95%]`} value={zipcode} onChange={(e) => setZipCode(e.target.value)}/>
                </div>
              </div>

              <div className="w-full flex pb-3">
                <div className="w-[50%]">
                  <label className="block pb-2">Address 1</label>
                  <input type="address" className={`${styles.input} !w-[95%]`} value={address1} onChange={(e) => setAddress1(e.target.value)}/>
                </div>

                <div className="w-[50%]">
                  <label className="block pb-2">Address 2</label>
                  <input type="text" className={`${styles.input} !w-[95%]`} value={address2} onChange={(e) => setAddress2(e.target.value)}/>
                </div>
              </div>

              <input type="submit" className={`w-[250px] h-[40px] border border-[#3a24db] text-center text-[#3a34db] rounded-[3px] mt-8 cursor-pointer`} value="Update" required/>
            </form>
          </div>
        </>
      )}

      {/* Order page  */}
      {active === 2 && (
        <div>
          <AllOrders />
        </div>
      )}

      {/* Refund page  */}
      {active === 3 && (
        <div>
          <AllRefundOrders />
        </div>
      )}
    </div>
  );
};


const AllOrders  = () => {
  const orders = [
    {
      _id: "7463HVBHADSKJFK5563",
      orderItems: [
        {
          name: "Iphone 14 pro max",
        },
      ],
      totalPrice : 120,
      orderStatus: "Processing",
    },
  ];

  const columns = [
    { field:"id", headerName: "Order ID", minWidth: 150, flex: 0.7 },
    {
      field : "status",
      headerName: "Status",
      minWidth: 130,
      flex: 0.7,
      cellClassName: (params) => {
        return params.getValue(params.id, "status") === "Delivered" ? "greenColor" : "redColor";
      },
    },

    {
      field: "itemsQty",
      headerName: "Items Qty",
      type: "number",
      minWidth: 130,
      flex: 0.7,
    },

    {
      field : "total",
      headerName: "Total",
      type: "number",
      minWidth: 130,
      flex: 0.8,
    },

    {
      field : " ",
      flex : 1,
      minWidth: 150,
      headerName: "",
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <>
          <Link to={`/order/${params.id}`}>
            <Button>
              <AiOutlineArrowRight size={20} />
            </Button>
          </Link>
          </>
        )
      }
    }
  ]

  const row = [];

  orders && orders.forEach((item) => {
    row.push({
      id: item._id,
      itemsQty : item.orderItems.length,
      total: "US$" + item.totalPrice,
      status: item.orderStatus,
    });
  });

  return (
    <div className="pl-8 pt-1">
      <DataGrid rows={row} columns={columns} pageSize={10} disableSelectionOnClick autoHeight />
    </div>
  )
}

const AllRefundOrders= () => {
  const orders = [
    {
      _id: "7463HVBHADSKJFK5563",
      orderItems: [
        {
          name: "Iphone 14 pro max",
        },
      ],
      totalPrice : 120,
      orderStatus: "Processing",
    },
  ];

  const columns = [
    { field:"id", headerName: "Order ID", minWidth: 150, flex: 0.7 },
    {
      field : "status",
      headerName: "Status",
      minWidth: 130,
      flex: 0.7,
      cellClassName: (params) => {
        return params.getValue(params.id, "status") === "Delivered" ? "greenColor" : "redColor";
      },
    },

    {
      field: "itemsQty",
      headerName: "Items Qty",
      type: "number",
      minWidth: 130,
      flex: 0.7,
    },

    {
      field : "total",
      headerName: "Total",
      type: "number",
      minWidth: 130,
      flex: 0.8,
    },

    {
      field : " ",
      flex : 1,
      minWidth: 150,
      headerName: "",
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <>
          <Link to={`/order/${params.id}`}>
            <Button>
              <AiOutlineArrowRight size={20} />
            </Button>
          </Link>
          </>
        )
      }
    }
  ]

  const row = [];

  orders && orders.forEach((item) => {
    row.push({
      id: item._id,
      itemsQty : item.orderItems.length,
      total: "US$" + item.totalPrice,
      status: item.orderStatus,
    });
  });

  return (
    <div className="pl-8 pt-1">
      <DataGrid rows={row} columns={columns} pageSize={10} autoHeight disableSelectionOnClick />
    </div>
  )
}

export default ProfileContent;
