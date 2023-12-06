import React from 'react';
import { AppChip } from '../AppChip';
import { AppFlex } from '../AppFlex';

const AppTopicFilter = () => {
  return (
    <AppFlex justify='center'>
      <AppChip>All</AppChip>
      <AppChip>Action</AppChip>
      <AppChip>Drama</AppChip>
      <AppChip>Crime</AppChip>
      <AppChip>Horror</AppChip>
      <AppChip>Documentary</AppChip>
      <AppChip>Anime</AppChip>
    </AppFlex>
  );
};

export default AppTopicFilter;
