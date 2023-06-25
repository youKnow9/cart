const BtnDel = ({ deliteProduct, id }) => {
	return ( 
		<button type="button" onClick={ () => {deliteProduct(id);} }>
                        <img src="./img/icons/cross.svg" alt="Delete" />
                </button>
	);
}
 
export default BtnDel;