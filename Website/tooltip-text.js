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

    "2-householdIncome": "Subjects with higher household incomes were more likely to rate their relationships as 'good.'",
    "2-subjectAge": "Older subjects were more likely to rate their relationships as 'good.'",
    "2-partnerEduc_years": "Subjects with more educated partners were more likely to rate their relationships as 'good.'",
    "2-partnerAge": "Subjects with older partners were more likely to rate their relationships as 'good.'",
    "2-subjectEduc_years": "Subjects with more education were more likely to rate their relationships as 'good.'",
    "2-partnerMotherEduc_years": "Subjects who's partner's mothers were more educated were more likely to rate their relationships as 'good.'",
    "2-met_YearFraction": "Subjects that met their partners in more recent years were less likely to rate their relationships as 'good,' as opposed to subjects that met their partner in earlier years.",
    "2-shipStart_YearFraction": "Subjects that started their relationship more recently were less likely to rate their relationships as 'good.'",
    "2-householdMinor_num": "Subjects with more children at home were less likely to rate their relationships as 'good.'",
    "2-householdSize": "Subjects with larger household sizes were less likely to rate their relationships as 'good.'",
    "2-subjectParty_DemPos_RepNeg": "Subjects that leaned further left in political views were less likely to rate their relationships as 'good.' (This may be due to older participants having more right leaning views, so this may be more about older subjects rating their relationships higher than political party.)",
    "2-ageGap": "Subjects in relationships with larger age gaps were less likely to rate their relationships as 'good.'",

    // 3 Classification

    "3-householdIncome": "Subjects with higher household income were more likely to rate their relationships as 'good.'",
    "3-isLivingTogether_Yes": "Subjects living together with their partners were more likely to rate their relationships as 'good.'",
    "3-metAs_coworkers_yes": "Subjects who met their partners as coworkers were less likely to rate their relationships as 'good.'",
    "3-partnerAge": "Subjects who had partners that were older were more likely to rate their relationships as 'good.'",
    "3-partnerMotherEduc_years": "Subjects who's partner's mothers were more educated were more likely to rate their relationships as 'good.'",
    "3-sexFrequency_3_to_6_times_a_week": "Subjects who had sex with their partners 3 to 6 times a week were more likely to rate their relationships as 'good.'",
    "3-sexFrequency_Once_a_month_or_less": "Subjects who had sex with their partners once a month or less were less likely to rate their relationships as 'good.'",
    "3-sexFrequency_Once_or_twice_a_week": "Subjects who had sex with their partners 1 to 2 times a week were more likely to rate their relationships as 'good.'",

    // 4 Regression

    "4-householdIncome": "Subjects that had higher household income were more likely to rate their relationships as 'good.'",
    "4-householdMinor_num": "Subjects that had children were slightly less likely to rate their relationships as 'good.'",
    "4-isLivingTogether_Yes": "Subjects that were living together with their partners were more likely to rate their relationships as 'good.'",
    "4-metAs_workNeighbors_yes": "Subjects that met their partners as working neighbors were more likely to rate their relationships as 'good.'",
    "4-metIn_school_yes":  "Subjects that met their partners in school were more likely to rate their relationships as 'good.'",
    "4-partnerRace_Asian or Pacific Islander": "It seems in this model, for this specific dataset, subjects that had Asian or Pacific Islander partners were more likely to rate their relationships as 'good.'",
    "4-partnerRace_White": "It seems in this model, for this specific dataset, subjects that had White partners were more likely to rate their relationships as 'good.'",
    "4-sexFrequency_3 to 6 times a week": "Subjects who had sex with their partners 3 to 6 times a week were more likely to rate their relationships as 'good.'",
    "4-sexFrequency_Once a month or less": "Subjects who had sex with their partners once a month or less were less likely to rate their relationships as 'good.'",
    "4-sexFrequency_Once or twice a week": "Subjects who had sex with their partners 1 to 2 times a week were more likely to rate their relationships as 'good.'",
    "4-whoEarnedMore_We earned about the same amount": "Subjects who earned about the same income as their partners were more likely to rate their relationships as 'good.'",
};
  
export { ToolTipText };