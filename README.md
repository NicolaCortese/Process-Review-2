# Process-Review-2

client brief
digital audio ws plugins, 
musician that right electronic music use filters to change how they track sound,
they would like me to build a band pass filter.

A band pass filter will take a list or an array, each element will be a frequency. The band pass filter will be able to tell if they are outside of a specified range, if they are above or below the limits they will be changed to match those limits.

Each of the frequencies will be an integer, the limits are default values, lower limit = 40Hz, upper limit = 1000Hz. 
The user should be able to change the values if they want to.

the array can be any length but it can't be empty.
If it is empty we should raise an error (Error "No frequencies supplied"), if the elements are not integers we return (Error "wrong input type supplied")

The output should be the array with the limits applied on the elements within.

Input || Output
[35]  || [40]
[1010]|| [1000]
[60]  || [60]
[35,60,1010]  || [40,60,1000]