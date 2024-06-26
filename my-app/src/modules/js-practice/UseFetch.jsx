import React, { useEffect, useState } from "react";

const UseFetch = (url) => {
  const [state, setState] = useState({ data: null, loading: true });
  useEffect(() => {
    setState({ data: null, loading: true });

    fetch(url)
      .then((x) => x.text())
      .then((y) => {
        setState({ data: y, loading: false });
      });
  }, [url]);

  return state;
};

export default UseFetch;
