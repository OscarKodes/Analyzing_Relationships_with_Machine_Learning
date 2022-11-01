const ToolTipText = {

    // 1 EDA - POSITIVE CORRELATIONS (FEATURE V FEATURE)
    "1-met_YearFraction~~shipStart_YearFraction": "The date that couples met and the date they started their relationships are positively correlated. This makes sense as most relationships form within a certain timespan after the two meet.",
    "1-partnerAge~~subjectAge": "Ages of subjects and their partners are positively correlated. This makes sense as most people date within their age range.",
    "1-householdSize~~householdMinor_num": "The number of children in a household is positively correlated with the number of household members. This makes sense as children count as household members.",
    "1-householdAdults_num~~householdSize": "The number of adults in a household is positively correlated with the number of household members. This makes sense as adults count as household members.",
    "1-partnerParty_DemPos_RepNeg~~subjectParty_DemPos_RepNeg": "The political parties of subjects and their partners are positively correlated. People are likely to date others who have similar political views.",
    "1-subjectAgeWhenMet~~timesDivorcedOrWidowed": "The subject's age when the couple met and number of times the subject has been divorced or widowed are positively correlated. This makes sense as the older a subject is the more likely they have had a past marriage that ended.",
    "1-subjectEduc_years~~partnerEduc_years": "A subject's and their partner's education levels are positively correlated. It seems people are more likely to date others with similar education levels.",
    "1-subjectEduc_years~~householdIncome": "A subject's education level and their household income are positively correlated. The more education a subject has, the higher their household income tends to be.",
    "1-subjectAgeWhenMet~~ageGap": "A subject's age when having met their partners is positively correlated with their age difference. It seems the older a subject was when they met their partner, the larger their age gap tends to be.",
    "1-met_YearFraction~~subjectAgeWhenMet": "The older a subject was when they met their partners, the more recent the meeting year will be.",
    "1-partnerEduc_years~~householdIncome": "A subject's partner's education level and their household income are positively correlated. The more education a partner has, the higher their household income tends to be.",
    "1-partnerMotherEduc_years~~subjectMotherEduc_years": "The education levels of the subject's mother and partner's mother are positively correlated. This may be because a mother's education level has correlation with her child's eduction, and couples tend to date those with similar education, so the education levels of the mothers are indirectly correlated.",

    // 1 EDA - NEGATIVE CORRELATIONS (FEATURE V FEATURE)
    "1-subjectAgeWhenMet~~met_to_shipStart_diff": "The age a subject was when they met their partner, and the amount of time it took for them to start a relationship are negatively correlated. It seems older subjects move from meeting a stranger to having a relationships a bit faster than younger subjects.",
    "1-subjectAge~~partnerMotherEduc_years": "A subject's age and their partner's mother education level are negatively correlated. Since the education of subjects, partners, and their mothers are all correlated, we might say that the older a couple is, the lower education levels are in general. This correlation might be due to education being less available in the past for earlier generations.",
    "1-partnerAge~~partnerMotherEduc_years": "A partner's age and the partner's mother education level are negatively correlated. Since the education of subjects, partners, and their mothers are all correlated, we might say that the older a couple is, the lower education levels are in general. This correlation might be due to education being less available in the past for  earlier generations.",
    "1-subjectAgeWhenMet~~householdSize": "The subject's age when met and householdsize are negatively correlated. The younger the subject was when meeting their partner, the larger their household size is likely to be at the time of survey.",
    "1-met_to_shipStart_diff~~met_YearFraction": "The year the couple met and the time it took for them to become a couple are negatively correlated. It seems relationships took longer to become established in the earlier years compared to more recent years ** Nathan Yau different",
    "1-subjectAgeWhenMet~~householdAdults_num": "The subject's age when met and number of household adults are negatively correlated. The younger the subject was when meeting their partner, the more household adults there will be at the time of survey.",
    "1-householdMinor_num~~subjectAgeWhenMet": "The subject's age when met and number of household children are negatively correlated. The younger the subject was when meeting their partner, the more household children there will be at the time of survey.",
    "1-householdIncome~~shipStart_YearFraction": "The time a subject's relationship started and their household income are negatively correlated. The more recent a relationship has started, their household income will likely be lower. Maybe this is due to the fact that older couples had more time to accumulate wealth and career experience.",
    "1-met_YearFraction~~relationshipQuality_isGood": "The year a couple met is negatively correlated with how likely the subject is to rate their relationship as good. It seems the farther back a couple has met, the more likely the subject is to rate their relationship higher. They have lasted the test of time.",
    "1-householdIncome~~met_YearFraction": "The year a couple met and their household income are negatively correlated. It seems the farther back a couple has met, the more likely they were to have higher household income. This may be due older couples having had more time to accumulate wealth and career experience.",
    "1-subjectAge~~subjectParty_DemPos_RepNeg": "The age of a subject and how far left their political views were, were negatively correlated. Younger subjects were more likely to identify with democratic views and older subjects were more likely to identify with republic views.",
    "1-shipStart_YearFraction~~relationshipQuality_isGood": "The year a relationship formed is negatively correlated with how likely the subject is to rate their relationship as good. It seems the farther back a couple has met, the more likely the subject is to rate their relationship higher. They have lasted the test of time.",

    // 2 EDA - TOP rQUAL CORRELATIONS

    "2-householdIncome": 0.102004,
    "2-subjectAge": 0.099504,
    "2-partnerEduc_years": 0.088878,
    "2-partnerAge": 0.085148,
    "2-subjectEduc_years": 0.074172,
    "2-partnerMotherEduc_years": 0.069184,
    "2-met_YearFraction": -0.118335,
    "2-shipStart_YearFraction": -0.10932,
    "2-householdMinor_num": -0.075959,
    "2-householdSize": -0.060212,
    "2-subjectParty_DemPos_RepNeg": -0.058733,
    "2-ageGap": -0.053706,

    // 3 Classification

    "3-householdIncome": 0.3134,
    "3-isLivingTogether_Yes": 0.8388,
    "3-metAs_coworkers_yes": -0.6509,
    "3-partnerAge": 0.4386,
    "3-partnerMotherEduc_years": 0.276,
    "3-sexFrequency_3_to_6_times_a_week": 0.7093,
    "3-sexFrequency_Once_a_month_or_less": -0.712,
    "3-sexFrequency_Once_or_twice_a_week": 0.6962,

    // 4 Regression

    "4-householdIncome": 0.0662,
    "4-householdMinor_num": -0.0728,
    "4-isLivingTogether_Yes": 0.4595,
    "4-metAs_workNeighbors_yes": 0.3042,
    "4-metIn_school_yes": 0.1611,
    "4-partnerRace_Asian or Pacific Islander": 0.1827,
    "4-partnerRace_White": 0.2158,
    "4-sexFrequency_3 to 6 times a week": 0.2075,
    "4-sexFrequency_Once a month or less": -0.2096,
    "4-sexFrequency_Once or twice a week": 0.1001,
    "4-whoEarnedMore_We earned about the same amount": 0.1034
};
  
export { ToolTipText };