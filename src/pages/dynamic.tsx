import { GetServerSideProps, NextPage } from "next";
import {useState, useEffect, ReactNode} from 'react'
import { Container, Row, Col } from "reactstrap";

interface ApiResponse {
    name: string,
    timestamp: Date
}

export const getServerSideProps: GetServerSideProps = async () =>{
    const serverSideDate: ApiResponse = await fetch(`${process.env.NEXT_PUBLIC_APIURL}/api/hello`)
        .then(res => res.json())
    return {
        props:{
            serverSideDate
        }
    }
}

const Dynamic: NextPage = (props:{
    children?: ReactNode,
    serverSideDate?: ApiResponse

}) => {
    const [clientSideData, setClientSideData] = useState<ApiResponse>()

    useEffect(()=>{
        fetchData()
    },[])

    const fetchData = async () => {
        const data = await fetch('/api/hello')
            .then(res => res.json())
        setClientSideData(data)
    }
    return(
       <Container tag='main' >
            <h1 className="my-5">
                Como funciona as rederizações do Next.js
            </h1>
            <Row>
                <Col>
                    <h3>
                        Gerado no servidor: {props.serverSideDate?.timestamp.toString()}
                    </h3>
                </Col>
                <Col>
                    <h3>
                        Gerado no cliente: {clientSideData?.timestamp.toString()}
                    </h3>
                </Col>
            </Row>

       </Container> 
    )
}

export default Dynamic