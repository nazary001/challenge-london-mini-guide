import './ChooseCitySelect.css'
function ChooseCitySelect({onChange}) {

    const cityChange = event => {
        onChange(event.target.value);
    }

    return(
        <div>
            <div className = 'select_div'>
            <label className = 'choose_label'>Choose a city</label>
            <select className = 'city_select' onChange = {cityChange}>
                <option value = '' disabled selected hidden>Click here</option>
                <option value = 'Harrow'>Harrow</option>
                <option value = 'Stratford'>Stratford</option>
                <option value = 'Heathrow'>Heathrow</option>
            </select>
        </div>
        <hr/>
        </div>
        
    )
}

export default ChooseCitySelect;