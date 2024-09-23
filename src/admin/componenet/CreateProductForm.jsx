import React, { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import { createproducts } from "../../redux/product/Action";
import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
const initalSizes = [
  { name: "S", quantity: 0 },
  { name: "M", quantity: 0 },
  { name: "L", quantity: 0 },
 
];
export default function CreateProductForm() {
  const [productData, setproductData] = useState({
    imageUrl: "",
    brand: "",
    title: "",
    color: "",
    discountedPrice: "",
    price: "",
    discountPersent: "",
    size: initalSizes,
    quantity: "",
    toplevelCategory: "",
    secondlevelCategory: "",
    thirdlevelCategory: "",
    description: "",
  });
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");

  const handlechange = (e) => {
    const { name, value } = e.target;
    setproductData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSizechange = (e, index) => {
    let { name, value } = e.target;
    name === "size_quantity" ? (name = "quantity") : (name = e.target.name);
    const sizes = [...productData.size];
    sizes[index][name] = value;
    setproductData((prevState) => ({
      ...prevState,
      size: sizes,
    }));
  };
  const handlesubmit = (e) => {
    e.preventDefault();
    dispatch(createproducts(productData));
    console.log(productData);
  };
  return (
    <Fragment className="createProductContainer">
      <Typography
        variant="h3"
        sx={{ textAlign: "center" }}
        className="py-10 text-center"
      >
        Add New Product
      </Typography>
      <form
        onSubmit={handlesubmit}
        className="createProductContainer min-h-screen"
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Image URL"
              name="imageUrl"
              value={productData.imageUrl}
              onChange={handlechange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Brand"
              name="brand"
              value={productData.brand}
              onChange={handlechange}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Title"
              name="title"
              value={productData.title}
              onChange={handlechange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Color"
              name="color"
              value={productData.color}
              onChange={handlechange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Quantity"
              name="quantity"
              value={productData.quantity}
              onChange={handlechange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Price"
              name="price"
              value={productData.price}
              type="number"
              onChange={handlechange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="DiscountedPrice"
              name="discountedPrice"
             type="number"
              value={productData.discountedPrice}
              onChange={handlechange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="DiscountPersent"
              name="discountPersent"
              value={productData.discountPersent}
              onChange={handlechange}
            />
          </Grid>
          <Grid item xs={6} sm={6}>
            <FormControl fullWidth>
              <InputLabel> Top Level Category </InputLabel>
              <Select
                name="toplevelCategory"
                value={productData.toplevelCategory}
                onChange={handlechange}
                label="Top Level Category"
              >
                <MenuItem value="men">Men</MenuItem>
                <MenuItem value="women">Women</MenuItem>
                <MenuItem value="kids">Kids</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6} sm={6}>
            <FormControl fullWidth>
              <InputLabel>Secound Level Category</InputLabel>
              <Select
                name="secondlevelCategory"
                value={productData.secondlevelCategory}
                onChange={handlechange}
                label="Secound Level Category"
              >
                <MenuItem value="clothing">clothing</MenuItem>
                <MenuItem value="accessoris">Accessories</MenuItem>
                <MenuItem value="brand">Brands</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6} sm={6}>
            <FormControl fullWidth>
              <InputLabel>Third Level Category</InputLabel>
              <Select
                name="thirdlevelCategory"
                value={productData.thirdlevelCategory}
                onChange={handlechange}
                label="THird Level Category"
              >
                <MenuItem value="mens_kurta">Mens_kurta</MenuItem>
                <MenuItem value="women_dress">Dresses</MenuItem>
                <MenuItem value="t-shirt">T-Shirts</MenuItem>

                <MenuItem value="saree">Saree</MenuItem>
                <MenuItem value="lengha_choli">Lengha choli</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={12}>
            <TextField
              fullWidth
              label="Description"
              id="outlined-multiline-static"
              multiline
              name="description"
              rows={3}
              value={productData.description}
              onChange={handlechange}
            />
          </Grid>
          {productData.size.map((size, index) => (
            <Grid container item spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Size_Name"
                  name="name"
                  value={size.name}
                  onChange={(event) => handleSizechange(event, index)}
                  required
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Quantity"
                  name="size_quantity"
                  type="number"
                  onChange={(event) => handleSizechange(event, index)}
                  required
                />
              </Grid>
            </Grid>
          ))}
          <Grid item xs={12}>
            <Button variant="contained"
            sx={{p:1.8}}
            className='py-20'
            size="large"
            type="submit">
              Add New Product
            </Button>
          </Grid>
        </Grid>
      </form>
    </Fragment>
  );
}
