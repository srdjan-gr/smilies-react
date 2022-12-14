import React from 'react'

const SizeChart = ({ tabela }) => {

    switch (tabela) {
        case 'z':
            return (
                <div className="items-description-cont-1 tm-mobile">
                    <div className="items-description-cont-1-heading">
                        <label htmlFor="sizeChart" data-en='Size chart' data-sr='Tabela mera:'>Tabela mera</label>
                        <p className="openPicto" id="openPicto" data-en='How to measure' data-sr='Kako meriti'>Kako meriti</p>
                    </div>
                    <div className="items-description-cont-1-content" id='sizeChart'>
                        <table>
                            <thead>
                                <tr>
                                    <td></td>
                                    <td>36</td>
                                    <td>38</td>
                                    <td>40</td>
                                    <td>42</td>
                                    <td>44</td>
                                    <td>46</td>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td data-en='Chest' data-sr='Obim grudi'>Obim grudi</td>
                                    <td>84</td>
                                    <td>88</td>
                                    <td>92</td>
                                    <td>96</td>
                                    <td>102</td>
                                    <td>108</td>
                                </tr>
                                <tr>
                                    <td data-en='Waist' data-sr='Obim struk'>Obim struka</td>
                                    <td>66</td>
                                    <td>70</td>
                                    <td>74</td>
                                    <td>78</td>
                                    <td>84</td>
                                    <td>90</td>
                                </tr>
                                <tr>
                                    <td data-en='Hip' data-sr='Obim boka'>Obim boka</td>
                                    <td>94</td>
                                    <td>98</td>
                                    <td>102</td>
                                    <td>106</td>
                                    <td>112</td>
                                    <td>118</td>
                                </tr>
                                <tr>
                                    <td data-en='Shoulder width' data-sr='??irina le??a'>??irina le??a</td>
                                    <td>39</td>
                                    <td>40</td>
                                    <td>41</td>
                                    <td>42</td>
                                    <td>43</td>
                                    <td>44</td>
                                </tr>
                                <tr>
                                    <td data-en='Sleve lenght' data-sr='Du??ina rukava'>Du??ina rukava</td>
                                    <td>60.5</td>
                                    <td>61</td>
                                    <td>61.5</td>
                                    <td>62</td>
                                    <td>62.5</td>
                                    <td>63</td>
                                </tr>
                                <tr>
                                    <td data-en='Crotch' data-sr='Du??ina koraka'>Du??ina koraka</td>
                                    <td>80.5</td>
                                    <td>81</td>
                                    <td>81.5</td>
                                    <td>82</td>
                                    <td>82.5</td>
                                    <td>83</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            )
            break;
        case 'm':
            return (
                <div className="items-description-cont-1">
                    <div className="items-description-cont-1-heading">
                        <label htmlFor="sizeChart" data-en='Size chart' data-sr='Tabela mera:'>Tabela mera</label>
                        <p className="openPicto" id="openPicto" data-en='How to measure' data-sr='Kako meriti'>Kako meriti</p>
                    </div>
                    <div className="items-description-cont-1-content" id='sizeChart'>
                        <table>
                            <thead>
                                <tr>
                                    <td></td>
                                    <td>48</td>
                                    <td>50</td>
                                    <td>52</td>
                                    <td>54</td>
                                    <td>56</td>
                                    <td>58</td>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td data-en='Chest' data-sr='Obim grudi'>Obim grudi</td>
                                    <td>96</td>
                                    <td>100</td>
                                    <td>102</td>
                                    <td>104</td>
                                    <td>108</td>
                                    <td>112</td>
                                </tr>
                                <tr>
                                    <td data-en='Waist' data-sr='Obim struk'>Obim struka</td>
                                    <td>88</td>
                                    <td>92</td>
                                    <td>96</td>
                                    <td>100</td>
                                    <td>104</td>
                                    <td>108</td>
                                </tr>
                                <tr>
                                    <td data-en='Hip' data-sr='Obim boka'>Obim boka</td>
                                    <td>102</td>
                                    <td>106</td>
                                    <td>110</td>
                                    <td>114</td>
                                    <td>118</td>
                                    <td>122</td>
                                </tr>
                                <tr>
                                    <td data-en='Shoulder width' data-sr='??irina le??a'>??irina le??a</td>
                                    <td>40</td>
                                    <td>42</td>
                                    <td>43</td>
                                    <td>44</td>
                                    <td>45</td>
                                    <td>46</td>
                                </tr>
                                <tr>
                                    <td data-en='Sleve lenght' data-sr='Du??ina rukava'>Du??ina rukava</td>
                                    <td>63.5</td>
                                    <td>64</td>
                                    <td>64.5</td>
                                    <td>65</td>
                                    <td>65.5</td>
                                    <td>66</td>
                                </tr>
                                <tr>
                                    <td data-en='Crotch' data-sr='Du??ina koraka'>Du??ina koraka</td>
                                    <td>79.5</td>
                                    <td>80</td>
                                    <td>80.5</td>
                                    <td>81</td>
                                    <td>81.5</td>
                                    <td>82</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            )
            break;
        case 'n':
            return (
                <div className="items-description-cont-1">
                    <div className="items-description-cont-1-heading">
                        <label htmlFor="sizeChart" data-en='Size chart' data-sr='Tabela mera:'>Tabela mera</label>
                    </div>
                    <div className="items-description-cont-1-content">
                        <p>Tabelela mera ne postoji.</p>
                    </div>
                </div>
            )
            break;

        default: return (
            <div className="items-description-cont-1">
                <div className="items-description-cont-1-heading">
                    <label htmlFor="sizeChart" data-en='Size chart' data-sr='Tabela mera:'>Tabela mera</label>
                </div>
                <div className="items-description-cont-1-content">
                    <p>Tabelela mera ne postoji.</p>
                </div>
            </div>
        )
    }

}

export default SizeChart