import { toast } from 'react-hot-toast';


export function validateSearchTerm(searchTerm) {
    if (searchTerm.length < 4) {
        toast.error('Search term should be at least 4 characters long');
      return false;
    }
  
    if (searchTerm === 'doublevpartners') {
        toast.error("You can't look for this");
      return false;
    }

    return true;
  }

  export function generalError(error){
    if(error){
      return error.status(404).sed();
    }
  }
  