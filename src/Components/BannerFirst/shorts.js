// eslint-disable-next-line import/no-anonymous-default-export
export default ({nameLabel,idSelect,optinSelect}) => {
    return(
        <div className="pre-place">
            <label htmlFor="">{nameLabel}</label>
            <select name="" id={idSelect}>
                <option value="" disabled selected>Select</option>
                {optinSelect.length > 0 && optinSelect.map((item,key)=> (

                    <option key={key} value={item}>{item}</option>
                    
                    ))}
                <option value=""></option>
            </select>
        </div>
    );
}