import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRandomQuote } from '../features/quote/quoteSlice';
import styles from './Quote.module.css'

function Quote() {
  const dispatch = useDispatch();
  const { text, author, status, error } = useSelector((state) => state.quote);

  useEffect(() => {
    dispatch(fetchRandomQuote());
  }, [dispatch]);

  const handleClick = () => {
    dispatch(fetchRandomQuote());
  };

  return (
    <div className={styles.card}>
      {status === 'loading' && <p>Loading...</p>}
      {status === 'failed' && <p className={styles.error}>{error}</p>}

      {status !== 'loading' && status !== 'failed' && text && (
        <>
          <p className={styles.text}>"{text}"</p>
          <p className={styles.author}>- {author}</p>
        </>
      )}

      <button onClick={handleClick} className={styles.button}>
        New Quote
      </button>
    </div>
  );
}

export default Quote;
