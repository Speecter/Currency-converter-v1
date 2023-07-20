{
    const calculateResult = (amountElement, currency) => {

        const EUR = 4.65;
        const USD = 4.21;
        const GBP = 5.27;
        const CHF = 4.74;

        switch (currency) {
            case "EUR":
                return amountElement / EUR
            case "USD":
                return amountElement / USD
            case "GBP":
                return amountElement / GBP
            case "CHF":
                return amountElement / CHF
        }
    };
    const updateResultText = (amount, result, currency) => {
        const resultElement = document.querySelector(".js-result");
        resultElement.innerText = `${amount.toFixed(2)} PLN = ${result.toFixed(2)} ${currency}`;
    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        const amountElement = document.querySelector(".js-form__PLN");
        const currencyElement = document.querySelector(".js-form_select");

        const amount = +amountElement.value;
        const currency = currencyElement.value;

        const result = calculateResult(amount, currency);
        updateResultText(amount, result, currency);
    };

    const init = () => {
        const sectionForm = document.querySelector(".js-form");

        sectionForm.addEventListener("submit", onFormSubmit);
    };

    init();
}