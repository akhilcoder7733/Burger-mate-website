import React from 'react';
import { Box, Typography, Card, CardMedia, CardContent } from '@mui/material';
import { styled } from '@mui/system';

const MainBox = styled(Box)(({ theme }) => ({
    minHeight: '100vh',
    backgroundColor: '#FEE715',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(3),
  }));
  
  const BlogBox = styled(Box)(({ theme }) => ({
    width: '90%',
    margin: theme.spacing(2),
    paddingLeft: theme.spacing(10),
    overflow:"hidden",
    display: 'flex',
    justifyContent:"center",
  }));
  
  const BurgerCard = styled(Card)(({ theme }) => ({
    display: 'flex',
    marginBottom: theme.spacing(2),
    width: '90%',
    backgroundColor:'#101820',
    boxShadow: "2px 2px 5px rgba(0,0,0,0.2)",
    transition: "transform 0.3s, box-shadow 0.3s",
    '&:hover': {
      transform: 'scale(1.02)',
      boxShadow: "5px 5px 10px rgba(0,0,0,0.3)",
    }
  }));
  
  const BurgerMedia = styled(CardMedia)({
    maxWidth: 300,
    maxHeight: 300,
    padding:"10px"
  });

const Blog = () => {
    const burgers = [
        {
          name: 'Classic Beef Burger',
          image: 'https://source.unsplash.com/300x200/?classic-beef-burger',
          description: 'A timeless classic with a juicy beef patty, lettuce, tomato, pickles, and our special sauce.',
          specs: 'Ingredients: Beef patty, lettuce, tomato, pickles, sauce. Calories: 800. Protein: 25g. Fat: 50g.',
        },
        {
          name: 'Cheese Burger',
          image: 'https://source.unsplash.com/300x200/?cheese-burger',
          description: 'A delicious cheeseburger with melted cheddar cheese, onions, and a hint of mustard.',
          specs: 'Ingredients: Beef patty, cheddar cheese, onions, mustard. Calories: 850. Protein: 28g. Fat: 55g.',
        },
        {
          name: 'Chicken Burger',
          image: 'https://source.unsplash.com/300x200/?chicken-burger',
          description: 'A tender chicken burger with crispy lettuce, tomatoes, and mayo.',
          specs: 'Ingredients: Chicken patty, lettuce, tomato, mayo. Calories: 700. Protein: 22g. Fat: 40g.',
        },
        {
          name: 'Veggie Burger',
          image: 'https://source.unsplash.com/300x200/?veggie-burger',
          description: 'A healthy veggie burger with a patty made from black beans, corn, and spices.',
          specs: 'Ingredients: Black beans, corn, spices, lettuce, tomato. Calories: 600. Protein: 15g. Fat: 20g.',
        },
        {
          name: 'Bacon Burger',
          image: 'https://source.unsplash.com/300x200/?bacon-burger',
          description: 'A savory bacon burger with crispy bacon, melted cheese, and a smoky BBQ sauce.',
          specs: 'Ingredients: Beef patty, bacon, cheese, BBQ sauce. Calories: 900. Protein: 30g. Fat: 60g.',
        },
        {
          name: 'Spicy Jalapeno Burger',
          image: 'https://source.unsplash.com/300x200/?spicy-jalapeno-burger',
          description: 'A fiery burger with jalapenos, pepper jack cheese, and spicy mayo.',
          specs: 'Ingredients: Beef patty, jalapenos, pepper jack cheese, spicy mayo. Calories: 870. Protein: 27g. Fat: 53g.',
        },
      ];
      

  return (
    <MainBox>
      <Typography variant="h2" sx={{ fontWeight: 600, fontFamily: 'Kanit, sans-serif', margin: 3 }}>
        Delicious Burgers Blog
      </Typography>
      {burgers.map((burger, index) => (
        <BlogBox key={index}>
          <Box data-aos="slide-left" data-aos-delay={`${index * 100}`}>
          <BurgerCard>
            <BurgerMedia
              component="img"
              image={burger.image}
              alt={burger.name}
            />
            <CardContent>
              <Typography variant="h5" sx={{ fontWeight: 600, fontFamily: 'Kanit, sans-serif', color:"#FEE715" }}>
                {burger.name}
              </Typography>
              <Typography variant="body1" sx={{ marginTop: 1 , color:"#FEE715"}}>
                {burger.description}
              </Typography>
              <Typography variant="body2" sx={{ marginTop: 1, fontStyle: 'italic', color:"#FEE715" }}>
                {burger.specs}
              </Typography>
            </CardContent>
          </BurgerCard>
          </Box>
        </BlogBox>
      ))}
    </MainBox>
  );
};

export default Blog;
