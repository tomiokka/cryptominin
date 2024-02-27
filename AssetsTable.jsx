import React from "react";
import { Table } from "antd";
import { useContext } from "react";
import cryptoContext from "../context/crypto-context";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    sorter: (a, b) => a.name.length - b.name.length,
    sortDirections: ["descend"],
  },
  {
    title: "Price, $",
    dataIndex: "price",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.price - b.price,
  },
  {
    title: "Amount",
    dataIndex: "amount",
    sorter: (a, b) => a.amount - b.amount,
  },
];

const AssetsTable = () => {
  const { assets } = useContext(cryptoContext);

  const data = assets.map((a) => ({
    key: a.id,
    name: a.name,
    price: a.price,
    amount: a.amount,
  }));

  return (
    <div>
      <Table
        pagination={false}
        columns={columns}
        dataSource={data}
      />
    </div>
  );
};

export default AssetsTable;
