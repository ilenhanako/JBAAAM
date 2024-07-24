import React, {useEffect, useState} from "react";
import {Box, Grid} from "@mui/material";
import FilterProduct from "../components/FilterProduct";
import FilterSource from "../components/FilterSource";
import {FileDrop} from "../components/UploadData/Uploader";

interface UploadDataProps {}

export default function UploadData({}: UploadDataProps) {
    const [selectedProduct, setSelectedProduct] = useState<string[]>([]);
    const [selectedSource, setSelectedSource] = useState<string[]>([]);

    return (
        <Box sx={{maxWidth: "lg", mx: "auto", px: 2}}>
            <h1>Upload Data</h1>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: {xs: "column", sm: "row"},
                    justifyContent: "flex-start",
                    gap: 2,
                    mb: 7,
                }}
            >
                <Box sx={{width: {xs: "100%", sm: "30%"}}}>
                    <FilterProduct
                        selectedProduct={selectedProduct}
                        setSelectedProduct={setSelectedProduct}
                        multiple={false}
                    />
                </Box>
                <Box sx={{width: {xs: "100%", sm: "30%"}}}>
                    <FilterSource
                        selectedSource={selectedSource}
                        setSelectedSource={setSelectedSource}
                        multiple={false}
                    />
                </Box>
            </Box>
            <FileDrop
                selectedProduct={selectedProduct}
                selectedSource={selectedSource}
            />
        </Box>
    );
}

export {};
