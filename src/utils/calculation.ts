export const numberWithCommas = (x:number) => {
    var parts = x.toString().split(".");
    parts[0]=parts[0].replace(/\B(?=(\d{3})+(?!\d))/g,",");
    return parts.join(",");
}

export const shortAddr = (addr:string) => {
    var firPart = addr.slice(0, 7);
    var secondPart = addr.slice(addr.length - 5, addr.length);
    return firPart.concat("...", secondPart);
}