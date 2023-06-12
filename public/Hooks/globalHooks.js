import React, { useState } from "react";
import avarta9 from "../../public/assets/Avatar-1.png";
import avarta8 from "../../public/assets/Avatar-2.png";
import avarta7 from "../../public/assets/Avatar-3.png";
import avarta6 from "../../public/assets/Avatar-4.png";
import avarta5 from "../../public/assets/Avatar-5.png";
import avarta4 from "../../public/assets/Avatar-6.png";
import avarta3 from "../../public/assets/Avatar-7.png";
import avarta2 from "../../public/assets/Avatar-8.png";
import avarta1 from "../../public/assets/Avatar.png";
import { useDispatch } from "react-redux";
import { toggleShow } from "@/features/modalShowSlice";
export const useGlobalHooks = () => {
  const transactionData = [
    {
      id: 1,
      name: "Brooklyn Simmons",
      description: "Figma",
      date: "8 Jun, 2022",
      price: "$150.54",
      status: "Pending",
      imageUrl: avarta1,
    },
    {
      id: 2,
      name: "Darlene Robertson",
      description: "Discord",
      date: "7 Jun, 2022",
      price: "$279.58",
      status: "Complete",
      imageUrl: avarta2,
    },
    {
      id: 3,
      name: "Devon Lane",
      description: "Dribbble",
      date: "2 Jun, 2022",
      price: "$450.54",
      status: "Decline",
      imageUrl: avarta3,
    },
    {
      id: 4,
      name: "Jane Cooper",
      description: "Spotify",
      date: "16 Mar, 2022",
      price: "$350.54",
      status: "Complete",
      imageUrl: avarta4,
    },
    {
      id: 5,
      name: "Darlene Robertson",
      description: "Discord",
      date: "4 Jun, 2022",
      price: "$350.54",
      status: "Decline",
      imageUrl: avarta5,
    },
    {
      id: 6,
      name: "Brooklyn Simmons",
      description: "Figma",
      date: "8 Jun, 2022",
      price: "$150.54",
      status: "Pending",
      imageUrl: avarta6,
    },
    {
      id: 7,
      name: "Devon Lane",
      description: "Dribbble",
      date: "18 Jun, 2022",
      price: "$950.54",
      status: "Complete",
      imageUrl: avarta7,
    },
    {
      id: 8,
      name: "Brooklyn Simmons",
      description: "Figma",
      date: "8 Jun, 2022",
      price: "$150.54",
      status: "Pending",
      imageUrl: avarta8,
    },
    {
      id: 9,
      name: "Brooklyn Simmons",
      description: "Figma",
      date: "8 Jun, 2022",
      price: "$50.54",
      status: "Complete",
      imageUrl: avarta9,
    },
    {
      id: 10,
      name: "Darlene Robertson",
      description: "Discord",
      date: "4 Jul, 2022",
      price: "$450.54",
      status: "Complete",
      imageUrl: avarta1,
    },
  ];

  const [show, setShow] = useState(false);
  const [transData, setTransData] = useState([]);
  const dispatch = useDispatch();

  const handleShow = (id) => {
    dispatch(toggleShow(id));
  };

  const btnTaps = () => {
    setShow(true);
    setTimeout(() => {
      setShow(false);
    }, 300);
  };

  // const handleShow = (id) => {
  //   setShow((prev) => ({ [id]: !prev[id] }));
  // };

  const handleSelectStatus = (e) => {
    e.preventDefault();
    const selectValue = e.target.id;

    const filterTransData = transactionData.filter((trans) => {
      if (selectValue === "All") {
        return trans;
      } else {
        return trans.status === selectValue;
      }
    });

    // console.log(filterTransData);

    setTransData(filterTransData);
  };

  // If transaction isn't filtered, show all transactions else show based on filtered
  const dataToRender = transData.length === 0 ? transactionData : transData;

  return {
    dataToRender,
    handleSelectStatus,
    handleShow,
    show,
    setShow,
    btnTaps,
  };
};
