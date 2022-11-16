import './CategoryBlock.css'

function CategoryBlock({onClick}) {

    const categorySelected = (event) => {
        onClick(event.target.value)
    }
    return(
        <div>
            <div className = 'category_buttons'>
            <button onClick={categorySelected} value = 'pharmacies'>Pharmacies</button>
            <button onClick={categorySelected} value = 'colleges'>Schools & colleges</button>
            <button onClick={categorySelected} value = 'hospitals'>Hospitals</button>
            <button onClick={categorySelected} value = 'doctors'>Doctors</button>
        </div>
        <hr/>
        </div>
    )
}

export default CategoryBlock;