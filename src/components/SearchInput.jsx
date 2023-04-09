import React, { useRef } from 'react'
import { HiOutlineSearch } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';

export default function SearchInput() {
    const inputData = useRef();
    const navigate = useNavigate();

    return (
        <div>
            <div className="input_search d-lg-none align-items-center  z-3 ">
                <div className="input_search d-flex  align-items-center float-end px-4 px-md-5" style={{ marginBottom: '5px' }}>
                    <button onClick={(e)=>{navigate(`/search/${inputData.current.value}`)}} style={{ width: '40px', height: '39px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '25px 0px 0px 25px', border: 'none' }} className=" col-2 btn btn-danger">
                        <span style={{ color: 'white', fontSize: '24px', display: 'flex' }}><HiOutlineSearch /></span>
                    </button>
                    <input ref={inputData} onKeyDown={(e) => {
                        if (e.key == 'Enter') {
                            navigate(`/search/${inputData.current.value}`)
                        }
                    }} style={{
                        borderRadius: '0px 25px 25px 0px', width: '190px', height: '40px',
                        backgroundColor: '', border: 'solid 1px rgb(0,0,0)', fontSize: '19px',
                        paddingLeft: '6px', paddingBottom: '5px', marginBottom: '1px'
                    }}
                        type="search" placeholder='search somthing. . .' name="" id="" />
                </div>
            </div>
        </div>
    )
}
