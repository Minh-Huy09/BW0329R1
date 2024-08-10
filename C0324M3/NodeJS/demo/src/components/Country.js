import { useEffect, useState } from "react";
import axios from "axios";

export function Country() {
    let [list, setList] = useState([]);
    let [nameSearch, setNameSearch] = useState("");
    let [field, setField] = useState("");
    let [check, setCheck] = useState(false);

    let api = "https://restcountries.com/v3.1/all?fields=name,area,population,flags,capital";
    const getAll = () => {
        axios.get(api).then((res) => {
            setList(res.data)
        })
    }
    let getField = (event) => {
        let field = event.target.value;
        if (field === "") {
            setCheck(false);
            getAll();
            return;
        } else {
            setField(field);
            api = api + "," + field;
            axios.get(api).then((res) => {
                setList(res.data);
                setCheck(true);
            })
        }
    }

    useEffect(() => {
        getAll();
    }, []);

    let findNameContain = (event) => {
        setNameSearch(event.target.value);
        let input = event.target.value;
        if (input === "") {
            getAll();
        } else {
            let newList = list.filter((item) => {
                let nameCountry = item.name.common;
                return nameCountry.toLowerCase().includes(input.toLowerCase());
            });
            setList(newList);
        }
    }

    let findByArea = () => {
        let from = 100;
        let to = 1000;
        let newList = list.filter((item) => {
            let area = item.area;
            return area >= from && area <= to;
        });
        setList(newList);
    }
    return (
        <>
            <h1>Danh sách các quốc gia</h1>
            <input placeholder="Nhập tên" value={nameSearch} onChange={(event) => {
                findNameContain(event)
            }} />
            <button onClick={findByArea}>Danh sách các nước diện tích 100 - 1000</button>
            <button onClick={getAll}>Hiên thị tất cả</button>
            <select onChange={getField} value={field}>
                <option value={""}>--Thêm--</option>
                <option value={"timezones"}>timezones</option>
                <option value="status">status</option>
            </select>
            <table border="1">
                <tr>
                    <td>STT</td>
                    <td>Ảnh</td>
                    <td>Tên</td>
                    <td>Thủ đô</td>
                    <td>Diện tích</td>
                    <td>Dân số</td>
                    {
                        check ? (<td>{field}</td>) : ""
                    }
                </tr>
                {
                    list.map((item, index) => (
                        <>
                            <tr>
                                <td>{index + 1}</td>
                                <td><img src={item.flags.png}></img></td>
                                <td>{item.name.common}</td>
                                <td>{item.capital[0]}</td>
                                <td>{item.area}</td>
                                <td>{item.population}</td>
                                {
                                    check ? (<td>{item[field]}</td>) : ""
                                }
                            </tr>
                        </>
                    ))
                }
            </table>
        </>
    )
}

export default Country;