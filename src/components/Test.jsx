export default function Test(props) {
    
    function handleChange() {
        console.log(event);
    }

    return (
        <form>
            <input 
                type="text" 
                placeholder="Please input..." 
                onChange={handleChange}
                className="test-input"
            />
        </form>
    )
}