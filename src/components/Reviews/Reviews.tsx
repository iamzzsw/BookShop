import React, { useEffect, useState } from "react";

import styles from "./Reviews.module.css";
import Typography from "../Typography/Typography";
import { useDispatch, useSelector } from "react-redux";
import { addReviews } from "../../store/categories/categories.reducer";
import { getReviews } from "../../store/categories/categories.selectors";
import { AppDispatch } from "../../store";

export interface ReviewsProps {
  author: string;
  text: string;
}

const fakeRequest = (): Promise<ReviewsProps[]> => {
  return new Promise((res) => {
    setTimeout(
      () =>
        res([
          {
            author: "Anastasia",
            text: "At times, It Book comes across as pretentious and out of touch with reality. The author seems to be operating under the assumption that everyone has the same privileges and access to resources as they do, which is simply not the case. The book's narrow focus on individualism and self-improvement also ignores the larger societal factors that contribute to people's struggles and limitations.",
          },
          {
            author: "Alex",
            text: "However, there are a few moments of humor sprinkled throughout the book that offer a much-needed break from the relentless positivity. For example, in one section, the author suggests visualizing yourself as a superhero to overcome obstacles. While this may be a helpful exercise for some, it's hard not to chuckle at the thought of a middle-aged office worker picturing themselves in a cape and tights.",
          },
        ]),
      1000
    );
  });
};

const Reviews = () => {
  const dispatch = useDispatch<AppDispatch>();
  const reviewsList = useSelector(getReviews);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fakeRequest()
      .then((review) => {
        dispatch(addReviews(review));
        setLoading(false)
      })
  }, []);

  return (
    <div className={styles.container}>
        <Typography>{loading}</Typography>
      {loading && (<Typography>Loading...</Typography>)}
      {reviewsList.map((review) => (
        <div key={review.author} className={styles.review}>
          <Typography variant="h3">{review.author}</Typography>
          <Typography>{review.text}</Typography>
        </div>
      ))}
    </div>
  );
};

export default Reviews;
