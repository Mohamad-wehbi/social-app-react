import { BiSolidPencil } from "react-icons/bi";
   
  const OpenInput = ({setOpen, setMenu}) => {

    const openInput = () => {
      setMenu(false);
      setOpen(true);
    }

    return (
      
          <div onClick={openInput} className="flex items-center justify-center gap-2">
              <BiSolidPencil />
              <div>Update</div>
          </div>
    );
  }


  export default OpenInput;