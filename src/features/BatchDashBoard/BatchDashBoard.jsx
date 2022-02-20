import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchBatchesAsync, filterBatches, setShowSlideOver
} from './BatchDashBoardSlice';

import Table from './Table';
import Filter from './Filter';
import SlideOver from './SlideOver';

export default function BatchDashBoard() {
  const dispatch = useDispatch();
  const batches = useSelector((state) => state.batchDashBoard.filteredBatches);

  useEffect(() => {
    dispatch(fetchBatchesAsync());
  }, [dispatch]);

  return (
    <div>
      <Filter filterFunction={filterBatches} filterFields={['Succeeded', 'Queued', 'Failed']}></Filter>
      <Table batches={batches} handleClick={(data) => dispatch(setShowSlideOver(data))}></Table>
      <SlideOver></SlideOver>
    </div>
  );
}