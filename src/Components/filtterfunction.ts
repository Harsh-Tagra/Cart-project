const Fliterfuncation = (data: any, value: string,By:string) => {
    if (value == "ALL") {
      return data;
    } else if(By=="Size"){
      const result = data.filter(({ Size }: any) => Size===value);
      return result;
    }else if(By=="Type"){
        const result = data.filter(({ Type }: any) => Type.includes(value));
        return result;
      }
    
  };
  
  export default Fliterfuncation;