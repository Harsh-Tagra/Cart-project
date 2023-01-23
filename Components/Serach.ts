const serach = (search: any, data: any) => {
    if (search.length === 0) {
      console.log(data);
      return data;
    } else {
      let keys: any = [];
      data.map((key: any) => (keys = Object.keys(key)));
  
      const result = data.filter((dat: any) => {
        for (let i = 0; i < keys.length; i++) {
          if (
            dat[keys[i]].toString().toLowerCase().includes(search.toLowerCase())
          ) {
            return true;
          }
        }
      });
      return result;
    }
  };
  export default serach;