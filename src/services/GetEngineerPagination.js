export default async function getDataPag(litmit,offset){
    let response = await fetch('https://si-enclave.herokuapp.com/api/v1/engineers?filter={"deletedAt": {"$exists": false}}&limit='+litmit+'&offset='+offset); 
    let data = await response.json()
    return data;
    
}
