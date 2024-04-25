import express from 'express';
import dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';

dotenv.config();

const app = express();
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);


app.use(express.json());

// Routes and API endpoints go here

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

// Get all reviews
app.get('/reviews', async (req, res) => {
    const { data: reviews, error } = await supabase.from('reviews').select('*');
    if (error) {
      console.error('Error fetching reviews:', error);
      return res.status(500).json({ error: 'Internal server error' });
    }
    console.log(reviews);
    console.log("HELLO");
    res.json(reviews);
    return reviews;
  });
  
  // Create a new restaurant review
  app.post('/reviews', async (req, res) => {
    const { name, website, description, review, images, rating, category } = req.body;
    const { data: newReview, error } = await supabase.from('reviews').insert({
      name,
      website,
      description,
      review,
      images,
      rating,
      category,
    });
    if (error) {
      console.error('Error creating restaurant:', error);
      return res.status(500).json({ error: 'Internal server error' });
    }
    res.json(newReview);
  });
  
  // Update a restaurant review
app.put('/reviews/:id', async (req, res) => {
    const { id } = req.params;
    const { name, website, description, review, images, rating, category } = req.body;
    const { data: updatedReview, error } = await supabase
      .from('reviews')
      .update({ name, website, description, review, images, rating, category })
      .eq('id', id)
      .single();
    if (error) {
      console.error('Error updating restaurant:', error);
      return res.status(500).json({ error: 'Internal server error' });
    }
    res.json(updatedReview);
  });
  
  // Delete a restaurant review
  app.delete('/reviews/:id', async (req, res) => {
    const { id } = req.params;
    const { data: deletedReview, error } = await supabase
      .from('reviews')
      .delete()
      .eq('id', id)
      .single();
    if (error) {
      console.error('Error deleting restaurant:', error);
      return res.status(500).json({ error: 'Internal server error' });
    }
    res.json(deletedReview);
  });
  // Add more endpoints for updating and deleting restaurant reviews