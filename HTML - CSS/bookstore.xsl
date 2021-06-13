<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/bookstore">
<html lang="en">

    <body>
        <table border="1">
            <tr bgcolor="pink">
                <th>Τίτλος</th>
                <th>Έτος</th>
                <th>Συγγραφέας</th>
            </tr>
            <xsl:for-each select="book">
                <tr>
                    <td> <xsl:value-of select="titlos"/>  </td>
                    <td> <xsl:value-of select="year"/>  </td>
                    <td> <xsl:value-of select="writer"/>  </td>
                </tr>
            </xsl:for-each>
        </table>
    </body>
</html>

</xsl:template>
</xsl:stylesheet>