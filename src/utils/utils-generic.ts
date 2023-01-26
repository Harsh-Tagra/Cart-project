export function getQtyStringToInt(qtyString: string) {
    if(qtyString==null || !qtyString || qtyString==""){
        return 1;
    }
    return parseInt(qtyString);
}
