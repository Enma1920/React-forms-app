export const Filter = ({filterName, handleSearchChange}) => {
    return(
    <div>filter shown with <input value={filterName} onChange={handleSearchChange}/> </div>
    )
}