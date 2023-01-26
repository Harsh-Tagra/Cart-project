const totalprice = (item:any,row:any)=>{
    let total=0;
    
    for (let i = 0; i < item; i++) {
        if (total == 0){ total = row[i].qty*row[i].Price}
         else{total =  row[i].qty*row[i].Price+total }
    
        
    }
return total;
}
export default totalprice;