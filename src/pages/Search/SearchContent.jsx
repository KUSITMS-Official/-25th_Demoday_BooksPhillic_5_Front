import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import { ColContainer, RowContainer } from '../../components/Container'
import Header from '../../components/Header'
import Input from './Input'
import { useLocation } from 'react-router-dom'
import Footer from '../../components/Footer'
import {searchByTag} from '../../services/ApiService'
import SearchPostCard from './SearchPostCard';
import SearchStoreCard from './SearchStoreCard';

const SearchContent = () => {

    const [loading, setLoading] = useState(true);

    // 책방 프로필 리스트
    const[storeList, setStoreList] = useState([{
        storeId: '',
        name: '',
        description: '',
        district: '',
        profileImg: ''
    }]);

    // 동네 컬렉션 리스트
    const[postList, setPostList] = useState([]);

    const location = useLocation();
    const {tag} = location.state; // 검색어

    // 태그 검색 api 호출
    const search = async (tag) => {
        try {
            const res = await searchByTag(tag);
            setStoreList(res.data.stores);
            console.log(storeList);
            setPostList(res.data.posts);
            setLoading(false);
        } catch(err) {
            console.error(err);
        }
    }

    useEffect(() => {
        search(tag);
    }, [])


  return (
    <>
        <Header/>
        <Top>
            <div style={{width:"70%"}}>
            <Input value={tag} disabled={true}/>
            </div>
        </Top>
        <SearchContainer>
            <ResultContainer>
                <RowContainer>
                    <Info>'{tag}'</Info>
                    <Info2>검색결과</Info2>
                </RowContainer>

                <RowContainer style={{marginTop:"108px"}}>
                    <Title>동네 컬렉션</Title>
                    { loading === false && 
                        <Num>{postList.length}개</Num>
                    }
                </RowContainer>
               
               <Collections>
                {
                    loading === false && 
                    postList.map((post)=>(
                        <SearchPostCard post={post} key={post.postId} />
                    ))
                   
                }
               </Collections>

               <hr style={{margin: "107px 0"}}/>

               <RowContainer>
                    <Title>책방 프로필</Title>
                    { loading === false && 
                        <Num>{storeList.length}개</Num> 
                    }
               </RowContainer>
               <Collections>
                    {
                        loading === false && 
                        storeList.map((store)=>(
                            <SearchStoreCard store={store} key={store.storeId}/>
                        ))
                    }
               </Collections>
            </ResultContainer>
        </SearchContainer>
        <Footer/>
    </>
  )
}

export default SearchContent
const Background=styled.div`
`
const Top=styled.div`
    background: #FFFA88;
    height: 416px;
    display: flex;
    align-items: center;
    justify-content: center;
`
const SearchContainer=styled(ColContainer)`
     margin: 150px 10%;
`
const ResultContainer=styled(ColContainer)`
`
const Info=styled.div`
    font-weight: 700;
    font-size: 36px;
`
const Info2=styled(Info)`
    color: #9E9E9E;
    margin-left: 1%;
`
const Collections=styled(RowContainer)`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap:107px 5%;
    margin:17px 0 0 0;
`
const Title=styled.div`
    font-weight: 700;
    font-size: 30px;
`
const Num=styled.div`
    margin-left: 1%;
    font-weight: 500;
    font-size: 20px;
    color: #616161;
`