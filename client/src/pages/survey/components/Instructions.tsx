import React from "react";
import {
  Alert,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { FACTORS } from "../../../constants";
import TaskAltIcon from "@mui/icons-material/TaskAlt";

const Instructions = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      {/* <Typography sx={{ fontWeight: 500, fontSize: 20 }}>
        Instructions:
      </Typography> */}
      <Alert severity="warning">Please Read them carefully.</Alert>
      <Typography>
        Please consider the three hypothetical data-related scenarios outlined
        below, answering the series of questions accompanying each scenario
        (vignette) as you read them. For each scenario, imagine you are helping
        a data scientist who is considering how best to reduce bias in the model
        outcome. When reviewing the scenarios, a minority group is any group
        that is not the majority within a specific context or setting. For
        example, if we are examining educational resource allocation in a region
        where the majority of students speak English as a first language,
        students who speak other languages at home would represent a minority
        group in that context. The Data Scientists will provide you with the
        context and the problem. For example,
      </Typography>
      <Typography>
        <b>Context:</b> Design a model for equitable distribution of healthcare
        resources, including medical staff, equipment, and facilities, across
        various regions.
      </Typography>
      <Typography>
        <b>Problem:</b> Ensure the model allocates resources to address the
        needs of each region fairly, without introducing bias based on protected
        characteristics.
      </Typography>
      <Typography>
        You will ask to supply your evaluation and eventually justification for
        which user characteristics might bias the model and then offer
        suggestions for how to mitigate these biases. There is no right or wrong
        answer, we’re collecting responses from 1000s of people and will average
        the results.
      </Typography>
      <Typography>
        When considering protected identities, the following could influence the
        model's outcomes?
      </Typography>
      <List>
        {FACTORS.map((itm) => (
          <ListItem disablePadding key={itm}>
            <ListItemIcon>
              <TaskAltIcon sx={{ fontSize: "1rem" }} />
            </ListItemIcon>
            <ListItemText primary={itm} sx={{ m: 0 }} />
          </ListItem>
        ))}
      </List>
      <Typography>
        John, selected Age and Gender and Socioeconomic Status … here’s his
        rationale.
      </Typography>
      <Typography>
        <i>Age</i> In my experience, I've seen that healthcare needs vary
        greatly with age, and overlooking this can lead to skewed resource
        distribution.
      </Typography>
      <Typography>
        <i>Gender</i> I believe it's essential to represent gender-specific
        healthcare requirements accurately to avoid imbalances.
      </Typography>
      <Typography>
        <i>Socioeconomic Status</i> I've observed that areas with different
        economic backgrounds encounter distinct barriers to healthcare, which
        can lead to unequal access if not addressed.
      </Typography>
      <Typography>
        Next, we need to tell the data scientists which of these factors are
        most important to reduce bias for. In most models, we can’t entirely
        remove bias.
      </Typography>
      <Typography>
        <b>Question:</b> Typically, a handful of protected characteristics can
        be optimized, when building the model, the designer should focus on
        limiting potential bias based on (select up to 2):
      </Typography>
      <List>
        {FACTORS.map((itm) => (
          <ListItem disablePadding key={itm}>
            <ListItemIcon>
              <TaskAltIcon sx={{ fontSize: "1rem" }} />
            </ListItemIcon>
            <ListItemText primary={itm} sx={{ m: 0 }} />
          </ListItem>
        ))}
      </List>
      <Typography>
        From the list of options you identified in the previous step, select the
        two protected classes that are most important to reduce bias around.
        John selected Socioeconomic Status. Here’s his rationale:
      </Typography>
      <Typography sx={{ fontStyle: "italic" }}>
        My choice to prioritize socioeconomic status stems from witnessing how
        it affects all aspects of healthcare. In my view, it is a proxy for a
        multitude of other factors that impact health outcomes and access to
        medical resources. By focusing on this, I am taking a step towards
        addressing a root cause of inequality in healthcare provision.
      </Typography>
      <Typography>
        Finally, there are many ways to reduce bias in a model. You will be
        asked to select a model evaluation criteria.
      </Typography>
      <Typography>
        <b>Question:</b> Among the choices below, the data scientist should
        ensure that model:
      </Typography>
      <List>
        {[
          "allocate resources to ensure that all groups across different regions have access to adequate healthcare.",
          "accurately reflect the healthcare needs of different groups. The model must recognize and address the specific health challenges faced by these groups.",
          "allocation of resources does not disadvantage regions with a high proportion of low socioeconomic status populations. The model must provide an equal opportunity for these regions to receive necessary healthcare resources.",
          "prevent systemic neglect of any region, regardless of its demographic makeup. It should be regularly assessed to correct any disparities in resource distribution",
        ].map((itm) => (
          <ListItem key={itm}>
            <ListItemIcon>
              <TaskAltIcon sx={{ fontSize: "1.25rem" }} />
            </ListItemIcon>
            <ListItemText primary={itm} />
          </ListItem>
        ))}
      </List>
      <Typography>
        After assessing the criteria, John chose option C. allocation of
        resources does not disadvantage regions with a high proportion of low
        socioeconomic status populations. The model must provide an equal
        opportunity for these regions to receive necessary healthcare resources.
      </Typography>
      <Typography sx={{ fontStyle: "italic" }}>
        In offering his rationale, John reflects, I've selected this criterion
        because of my firm belief that healthcare resources should be accessible
        to all, regardless of socioeconomic status. My experiences have shown me
        that the most significant disparities in health outcomes arise from
        resource inaccessibility in lower socioeconomic regions. By ensuring
        that our model gives precedence to accessibility, we can make a
        considerable difference in leveling the playing field for these
        communities, which is a powerful step toward healthcare equity.
      </Typography>
      <Typography>
        In the next few sections, you will be asked a similar set of questions.
      </Typography>
    </Box>
  );
};

export default Instructions;
