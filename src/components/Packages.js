import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import PackageCard from "./PackageCard";
import { accessPackagesApi } from "../services/allApis";

function Packages({ updated }) {
  const [allpackages, setAllpackages] = useState([]);
  const [filterProducts,setFilterProducts]=useState([])
  const [searchInp,setSearchInp]=useState("")



  console.log(searchInp);
  
  
  
  
  

  const getPackages = async () => {
    const result = await accessPackagesApi();

    if (result.status >= 200 || result.status <= 300) {
      setAllpackages(result.data);
      setFilterProducts(result.data)

    } else {
      alert("data access failed");
      
    }
  };

  // searchData


  const searchData=(e)=>{
    const sdata=e.target.value
    setSearchInp(sdata)
    const result =  filterProducts.filter(i=>i.title.toLowerCase().trim().includes(sdata.toLowerCase().trim())) 
    
    setAllpackages(result)
  }


  const belowFilter=()=>{
    const result = filterProducts.filter(i=>i.price<=20000)
    setAllpackages(result)
    console.log(result);

    
  }


  const searchReset=()=>{
    setSearchInp("")
    getPackages()
  }

  

  

  useEffect(() => {
    getPackages();
  }, [updated]);

  console.log(allpackages);

  return (
    <div>
      <Container>
      
          <div className="p-3 d-flex flex-wrap justify-content-between align-items-center">
           
              <input
                placeholder="search your fav places"
                type="text" value={searchInp} onChange={(e)=>searchData(e)}
                className="form-control w-75"
              />
          
  
            
              <div className="py-3">
                <button className="button-2 me-2" onClick={belowFilter} >Below 20k</button>
                <button className="button-2" onClick={searchReset} >All packages</button>
              </div>
            
          </div>
        
        
        <Row>
          <h4 className="text-center p-3 text-white" id="packs">Our packages</h4>
          {allpackages.length > 0  ? 
            allpackages.map((packages) => (
              <Col
                lg={4}
                md={6}
                sm={12}
                className="mb-4 d-flex justify-content-center"
              >
                <PackageCard
                  data={packages}
                  getPack={getPackages}
                ></PackageCard>
              </Col>
            ))
           : 
           searchInp.length>0 ?
            <h1 className="text-center text-white">
              {` No packages available "${searchInp}"`}
              </h1>

           :
           
           

           <div className="text-center">
           <img
             src="https://i.postimg.cc/BnHcx4zH/IMAA-Plan-Around-Globe-Gif-one.gif"
             alt="Loading..."
             style={{ width: "300px" }}
           />
         </div>
          
              

          }


          


          
        </Row>
      </Container>
    </div>
  );
}

export default Packages;
