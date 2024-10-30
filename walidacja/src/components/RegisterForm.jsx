import React, {useState} from 'react';

const RegisterForm = ()=> {
    const[formData, setData] = useState({
        name: '',
        email: '',
        password: '',
        city: ''
    })
};

    const [errors, setErrors] = useState({});
    const validate = () =>{
        let newErrors = {};
        if(formData.name.length < 3) {
            newErrors.name
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailPattern.test(formData.email)) {
            newErrors.email = "wprowadz poprawny email"
        }

        const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        if(!passwordPattern.test(formData.password)) {
            newErrors.password ="haslo musi miec conajmnije 8 znakow bla bla bla"
        }
        if(formData.city === '') {
            newErrors.city = 'Wybierz miasto';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length ===0;
    };
    const hadleSubmit = (event) => {
        event.preventDefault();
        if(validate()) {
            alert("g")
        }
        return (
            <form onSubmit ={hadleSubmit}>
                <div>
                    <label>Imie: </label>
                    <input
                    type='text'
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name:e.target.value})}
                    />
                    {errors.name && <p style={{color: 'red'}}>{errors.name}</p>}
                </div>
                <button type='submit'>wyslij</button>
            </form>
        )
    };
    
    export default RegisterForm;
