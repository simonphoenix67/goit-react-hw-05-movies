import { RotatingLines } from 'react-loader-spinner';
import { Loading } from './Loader.styled';

export const Loader = () => {
  return (
    <Loading>
      <RotatingLines
        strokeColor="#1c2d8e50"
        strokeWidth="5"
        animationDuration="0.5"
        width="150"
        visible={true}
      />
    </Loading>
  );
};
