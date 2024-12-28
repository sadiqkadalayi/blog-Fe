import React, { useEffect, useState } from 'react'
import Cards from '../../Components/Cards/Cards'
import { useNavigate, useParams } from 'react-router-dom';
import { AxiosInstance } from '../../config/axiosConfig';
import PaginationBox from '../../Components/PaginationBox/PaginationBox';

function Post() {
  const { pageNo } = useParams();
  const [data, setData] = useState([]);
  const [totalCount, settotalCount] = useState(0);
  let perpage = 2;
  const navigate = useNavigate();

  useEffect(() => {
    getData(pageNo);
  }, []);

  const nextPage = (newPageNo) => {
    navigate(`post/${newPageNo}`);
    getData(newPageNo);
  };

  const getData = (newPageNo=1) => {
   
    AxiosInstance.get(
      `/posts/getpostData?pageNo=${newPageNo}&perpage=${perpage}`
    )
      .then((res) => {
        setData(res.data[0]?.postData ?? []);
        settotalCount(res.data[0]?.totalCount?.[0]?.totalCount ?? 0);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className='container mt-3'>
        <div className='row'>
          <div className='d-flex flex-wrap gap-3'> {data.map((post) => <Cards post={post} key={post._id} />)}</div>
          <PaginationBox
        nextPage={nextPage}
        pageNo={parseInt(pageNo) ?? 1}
        maxPageNo={Math.ceil(totalCount / perpage)}
      />
        </div>
      </div>

    </>
  )
}

export default Post