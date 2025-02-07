
export function formatDate(dateString) {
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    };
    return new Date(dateString).toLocaleDateString('pt-BR', options);
}

{Object.entries(userExample).map(([key, value]) => {
    let displayValue = value;
    if (key.toLowerCase().includes('date') || key.toLowerCase().includes('at')) {
        displayValue = formatDate(value);
    }
    
    return (
        <div key={key} className={styles.userField}>
            <label>{key}:</label>
            <span data-type={key.toLowerCase().includes('date') ? 'date' : ''}>
                {displayValue}
            </span>
        </div>
    );
})}