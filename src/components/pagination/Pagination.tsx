
// import Pagination from '@mui/material/Pagination';

// import { Wrapper } from './Pagination.styled';


// export default function PaginationRounded({ quantity, page, onClick }) {
//     const itemsPerPage = 6;
    
//     const isDilabled =  (page * itemsPerPage) >= quantity;
//     console.log(isDilabled)
//     const handleChange = (e, value) => {
//     onClick(value)
// }
    
    
//   return (
//       <Wrapper>
//           <Pagination count={10} page={page} onChange={handleChange} disabled={isDilabled} />
         
//       </Wrapper>
//   );
// }


import { PaginationItem } from '@mui/material';
import Pagination from '@mui/material/Pagination';
import { Wrapper } from './Pagination.styled';

const PaginationRounded = ({ quantity, page, onClick }) => {

    const itemsPerPage = 6;
    const totalPages = quantity / itemsPerPage;

  const handleChange = (event, value) => {
    onClick(value);
  };

 
const disablePrevious = page === 1;
const disableNext = page === totalPages;
  

  return (
      <Wrapper>
          <Pagination
      count={totalPages}
      page={page}
      onChange={handleChange}
      siblingCount={1}
      boundaryCount={1}
      renderItem={(item) => (
          <PaginationItem {...item} disabled={item.page === page || (item.type === 'previous' && disablePrevious) || (item.type === 'next' && disableNext)} />
      )}
    />
    </Wrapper>
  );
};

export default PaginationRounded;
