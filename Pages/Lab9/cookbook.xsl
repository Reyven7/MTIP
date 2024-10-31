<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html>
            <body>
                <!-- Перша таблиця: початкові дані -->
                <h2>Початкові дані</h2>
                <table border="1">
                    <tr bgcolor="#9acd32">
                        <th>Тип страви</th>
                        <th>Назва</th>
                        <th>Інгредієнти</th>
                        <th>Калорії</th>
                        <th>Рецепт</th>
                    </tr>
                    <xsl:for-each select="cookbook/dish">
                        <tr>
                            <td><xsl:value-of select="type"/></td>
                            <td><xsl:value-of select="name"/></td>
                            <td>
                                <xsl:for-each select="ingredient">
                                    <p>
                                        <xsl:value-of select="name"/>:
                                        <xsl:value-of select="amount"/>
                                        <xsl:value-of select="measure"/>
                                    </p>
                                </xsl:for-each>
                            </td>
                            <td><xsl:value-of select="calories"/></td>
                            <td><xsl:value-of select="recipe"/></td>
                        </tr>
                    </xsl:for-each>
                </table>
                
                <!-- Друга таблиця: дані, відсортовані за калоріями -->
                <h2>Дані, відсортовані за калоріями</h2>
                <table border="1">
                    <tr bgcolor="#9acd32">
                        <th>Тип страви</th>
                        <th>Назва</th>
                        <th>Інгредієнти</th>
                        <th>Калорії</th>
                        <th>Рецепт</th>
                    </tr>
                    <xsl:for-each select="cookbook/dish">
                        <!-- Сортування за калоріями -->
                        <xsl:sort select="calories" data-type="number" order="ascending"/>
                        <tr>
                            <td><xsl:value-of select="type"/></td>
                            <td><xsl:value-of select="name"/></td>
                            <td>
                                <xsl:for-each select="ingredient">
                                    <p>
                                        <xsl:value-of select="name"/>:
                                        <xsl:value-of select="amount"/>
                                        <xsl:value-of select="measure"/>
                                    </p>
                                </xsl:for-each>
                            </td>
                            <td><xsl:value-of select="calories"/></td>
                            <td><xsl:value-of select="recipe"/></td>
                        </tr>
                    </xsl:for-each>
                </table>

                <!-- Третя таблиця: дані, відфільтровані для показу тільки "Салатів" -->
                <h2>Відфільтрована таблиця за типом: Салат</h2>
                <table border="1">
                    <tr bgcolor="#9acd32">
                        <th>Тип страви</th>
                        <th>Назва</th>
                        <th>Інгредієнти</th>
                        <th>Калорії</th>
                        <th>Рецепт</th>
                    </tr>
                    <xsl:for-each select="cookbook/dish">
                        <!-- Фільтрація тільки для страв типу "Салат" -->
                        <xsl:if test="type = 'Салат'">
                            <tr>
                                <td><xsl:value-of select="type"/></td>
                                <td><xsl:value-of select="name"/></td>
                                <td>
                                    <xsl:for-each select="ingredient">
                                        <p>
                                            <xsl:value-of select="name"/>:
                                            <xsl:value-of select="amount"/>
                                            <xsl:value-of select="measure"/>
                                        </p>
                                    </xsl:for-each>
                                </td>
                                <td><xsl:value-of select="calories"/></td>
                                <td><xsl:value-of select="recipe"/></td>
                            </tr>
                        </xsl:if>
                    </xsl:for-each>
                </table>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>
