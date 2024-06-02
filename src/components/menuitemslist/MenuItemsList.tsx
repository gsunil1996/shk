"use client";

import styles from "./MenuItems.module.css";
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
} from "@mui/material";
import { motion } from "framer-motion";
import { Star } from "@mui/icons-material";
import Button from "@mui/material/Button";
import { usePathname, useRouter } from "next/navigation";

const MenuItemsList = () => {
  const pathname = usePathname();
  const router = useRouter();
  const Starters = [
    {
      imageSrc:
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
      title: "Veg Mixer",
      content: "Tomato Salad & Carrot",
      price: "5.99",
      rating: "5.0",
      reviews: "87",
      url: "#",
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1432139555190-58524dae6a55?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
      title: "Macaroni",
      content: "Cheese Pizza",
      price: "2.99",
      rating: "4.8",
      reviews: "32",
      url: "#",
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327??ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
      title: "Nelli",
      content: "Hamburger & Fries",
      price: "7.99",
      rating: "4.9",
      reviews: "89",
      url: "#",
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
      title: "Jalapeno Poppers",
      content: "Crispy Soyabeans",
      price: "8.99",
      rating: "4.6",
      reviews: "12",
      url: "#",
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1473093226795-af9932fe5856?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
      title: "Cajun Chicken",
      content: "Roasted Chicken & Egg",
      price: "7.99",
      rating: "4.2",
      reviews: "19",
      url: "#",
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1550461716-dbf266b2a8a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
      title: "Chillie Cake",
      content: "Deepfried Chicken",
      price: "2.99",
      rating: "5.0",
      reviews: "61",
      url: "#",
    },
  ];
  return (
    <div style={{ marginBottom: "1rem" }}>
      {pathname === "/" && (
        <p className={styles.heading}>
          Checkout our <span className={styles.subHeading}>Menu.</span>{" "}
        </p>
      )}
      <Grid container justifyContent="center" spacing={2}>
        {Starters?.map((starter, index) => (
          <Grid item key={index}>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Card className={styles.mainCard}>
                <Box className={styles.imageBox}>
                  <Box className={styles.ratingBox}>
                    <Star className={styles.starIcon} />
                    <Typography variant="body2">
                      {starter.rating} ({starter.reviews} reviews)
                    </Typography>
                  </Box>
                  <CardMedia
                    component="img"
                    className={styles.cardMedia}
                    image={starter.imageSrc}
                    title={starter.title}
                  />
                </Box>
                <CardContent>
                  <Typography className={styles.title} component="p">
                    {starter.title}
                  </Typography>
                  <Typography
                    gutterBottom
                    className={styles.content}
                    component="p"
                  >
                    {starter.content}
                  </Typography>
                  <Typography className={styles.price} component="p">
                    Price: {starter.price}
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
      {pathname === "/" && (
        <div
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <Button
            variant="contained"
            style={{ background: "#6415ff" }}
            onClick={() => router.push("/products")}
          >
            Go to products
          </Button>
        </div>
      )}
    </div>
  );
};

export default MenuItemsList;
