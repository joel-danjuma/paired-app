export const sendEmail = async (formData) => {
    const userEmail = formData.get("email")

    const emails = [
        {
            userEmail,
        },
        {
            pairedEmail: "Leojjad@gmail.com",
        },
    ]

    try {
        await fetch(`${process.env.NEXTAUTH_URL}/api/send`, {
            method: "POST",
            body: JSON.stringify(emails),
            headers: {
                "Content-Type": "application/json",
            },
        })
    } catch (error) {
        return JSON.stringify(error)
    }
}
