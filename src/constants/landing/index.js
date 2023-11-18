import { bgImg2, bgImg3, customer1, customer2, sliderImg1 } from "../assets/images";
import { dataSecurity, facebook, globe, handHoldingDollar, handHoldingDollar2, instagram, linkedIn, microChip, security, tradingEfficiency, twitter, withdraw } from "../assets/icons";

const SliderImages = [
    {
        label: "Trade US Stocks and Options 24/7",
        body: "Stay responsive to market-shifting updates and trade a diverse portfolio of over 10,000 US Stocks and ETFs, along with US Equity  Index options, at your convenience.",
        imgURL: sliderImg1
    },
    {
        label: "Equity and Fair Pricing",
        body: "A world where fairness and equality shape our pricing. Let's create an inclusive marketplace where everyone can thrive.",
        imgURL: bgImg2
    },
    {
        label: "A Little Everyday",
        body: "Seize each day's market shifts with a diverse portfolio of over 10,000 US Stocks and ETFs, plus US Equity Index options, all at your fingertips.",
        imgURL: bgImg3
    }
]

const specialBenefits = [
    {
        imgURL: handHoldingDollar,
        label: "Professional Pricing",
        body: "Kick off with commissions as low as $4, take advantage of favorable margin rates, earn high interest, and benefit from Stock Yield Enhancement."
    },
    {
        imgURL: security,
        label: 'Strength and Security',
        body: "With $13.3 billion in equity capital, automated risk controls, daily asset valuation, and a stable A rating from Standard & Poor's, your investments are safeguarded and well-supported."
    },
    {
        imgURL: microChip,
        label: "Premium Technology",
        body: "Leverage IBKR's robust technology suite to enhance your trading speed and efficiency while conducting advanced portfolio analysis."
    },
    {
        imgURL: globe,
        label: "Global Access",
        body: "Access a world of investment opportunities, including stocks, options, futures, currencies, bonds, and funds, all from one integrated platform."
    },
]
const strategicInvestment = [
    {
        label: "Asset Management",
        imgURL: handHoldingDollar2
    },
    {
        label: "Data Security",
        imgURL: dataSecurity
    },
    {
        label: "Trading Efficiency",
        imgURL: tradingEfficiency
    },
    {
        label: "Instant Withdrawals",
        imgURL: withdraw
    }
]
const reviews = [
    {
        imgURL: customer1,
        customerName: "Ralph Edwards",
        rating: 4.5,
        feedback: "I’ve not seen this anywhere but I guess it was worth my search thanks to Complex Trading for sharing good ideas to earn good profits off the crypto market looking forward to a long term partnership with you guys."
    },
    {
        imgURL: customer2,
        customerName: "Sophia Korry",
        rating: 4.0,
        feedback: "I’ve not seen this anywhere but I guess it was worth my search thanks to Complex Trading for sharing good ideas to earn good profits off the crypto market looking forward to a long term partnership with you guys."
    }
]
const socialMedia = [
    {
        src: facebook,
        alt: "Facebook",
    },
    {
        src: twitter,
        alt: "Twitter",
    },
    {
        src: linkedIn,
        alt: "LinkedIn",
    },
    {
        src: instagram,
        alt: "Instagram",
    }
]
const footerLinks = [
    {
        title: "Links",
        links: [
            {
                link: "#",
                name: "Home",
            },
            {
                link: "#",
                name: "About",
            },
            {
                link: "#",
                name: "Services"
            },
            {
                link: "#",
                name: "Contact"
            },
            {
                link: "#",
                name: "Login"
            }

        ]
    },
    {
        title: "Social Media",
        links: [
            {
                link: "#",
                name: "Facebook",
            },
            {
                link: "#",
                name: "LinkedIn",
            },
            {
                link: "#",
                name: "Twitter",
            },
            {
                link: "#",
                name: "Instagram",
            },
        ]
    },
    {
        title: "Contact Us",
        links: [
            {
                link: "#",
                name: "complextrading92@gmail.com",
            },
        ]
    }
]
export {
    SliderImages,
    specialBenefits,
    strategicInvestment,
    reviews,
    socialMedia,
    footerLinks
}