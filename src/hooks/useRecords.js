import { useEffect, useState } from "react";
import HttpClient from "../core/http/HttpClient";
import Endpoints from "../core/http/Endpoints";
import Constants from "../core/http/Constants";

const { getRecords } = Endpoints;
const { totalEntries, companyConstant } = Constants;

const allRecords = totalEntries;

export const useRecords = ({ resource, search, update }) => {
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(false);
  const [id, setId] = useState(1);

  const apiData = async () => {
    setLoading(true);

    await HttpClient.request(
      getRecords({
        resource: resource,
        id: id,
      })
    )
      .then((data) => {
        // const response = data.data;
        // const operationPages = Math.ceil(response.total_entries / allRecords);
        // setRecords(response.entries);
        // setTotalEntries(response.total_entries);
        // setTotalPage(operationPages);
        // setLoading(false);
        // setUpdate(false);
        console.log("sadasd");
      })
      .catch((err) => {
        setLoading(false);
      });
  };

  useEffect(() => {
    apiData();
  }, []);

  useEffect(() => {
    if (update) {
      apiData();
    }
  }, [update]);

  return {
    loading,
    records,
  };
};
