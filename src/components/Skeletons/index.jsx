import React from "react";
import { Skeleton } from "@mui/material";
import { Container } from "@mui/system";

export const Skeletons = () => {
    return (
        <>
            <Container sx={{display: "flex", justifyContent: "space-between", width: "100%", margin: "0 auto"}}>
                <Skeleton variant="rounded" width={350} height={400} sx={{margin: "2em"}}/>
                <Skeleton variant="rounded" width={350} height={400} sx={{margin: "2em"}}/>
                <Skeleton variant="rounded" width={350} height={400} sx={{margin: "2em"}}/>
                <Skeleton variant="rounded" width={350} height={400} sx={{margin: "2em"}}/>
            </Container>
            <Container sx={{display: "flex", justifyContent: "space-between", width: "100%", margin: "0 auto"}}>
                <Skeleton variant="rounded" width={350} height={400} sx={{margin: "2em"}}/>
                <Skeleton variant="rounded" width={350} height={400} sx={{margin: "2em"}}/>
                <Skeleton variant="rounded" width={350} height={400} sx={{margin: "2em"}}/>
                <Skeleton variant="rounded" width={350} height={400} sx={{margin: "2em"}}/>
            </Container>
        </>
    )
    
}
