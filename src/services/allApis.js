import { baseUrl } from "./baseurl";
import { commoRequest } from "./commonRequest";

// add new packages

export const addPackageApi=async(bodyData)=>{
    return await commoRequest("POST",`${baseUrl}/packages`,bodyData)
}

// access packages

export const accessPackagesApi=async()=>{
    return await commoRequest("GET",`${baseUrl}/packages`,{})
}


// delete package

export const delePackageApi=async(id)=>{
    return await commoRequest("DELETE",`${baseUrl}/packages/${id}`,{})
}

// editpackage

export const editPackageApi=async(id,bodyData)=>{
    return await commoRequest("PUT",`${baseUrl}/packages/${id}`,bodyData)
}

// access single 

export const accessSinglePackageApi=async(id)=>{
    return await commoRequest("GET",`${baseUrl}/packages/${id}`,{})
}