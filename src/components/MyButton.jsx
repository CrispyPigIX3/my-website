export function MyButton({name})
{
    return (
        <button onClick={()=> {alert(name)}}>{name}</button>
    );
}