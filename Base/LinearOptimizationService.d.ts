/** Module: LinearOptimizationService */

type LinearOptimizationService = typeof LinearOptimizationService;
declare namespace LinearOptimizationService {

	/**
	 * Creates an engine to to solve linear programs (potentially mixed-integer programs).
	 * 
	 * <pre class="prettyprint"><code>
	 * // Creates a linear optimization engine.
	 * var engine = LinearOptimizationService.createEngine();
	 * engine.addVariable(&#39;x&#39;, 0, 10);
	 * 
	 * // ...
	 * </code></pre>
	 * 
	 * @returns a linear optimization engine
	 */
	function createEngine(): LinearOptimizationService.LinearOptimizationEngine

	class LinearOptimizationConstraint {
		private constructor();

		/**
		 * Sets the coefficient of a variable in the constraint. By default, variables have a coefficient
		 * of 0.
		 * 
		 * <pre class="prettyprint"><code>
		 * var engine = LinearOptimizationService.createEngine();
		 * // Create a linear constraint with the bounds 0 and 10
		 * var constraint = engine.addConstraint(0, 10);
		 * // Create a variable so we can add it to the constraint
		 * engine.addVariable(&#39;x&#39;, 0, 5);
		 * // Set the coefficient of the variable in the constraint. The constraint is now:
		 * // 0 &lt;= 2 * x &lt;= 5
		 * constraint.setCoefficient(&#39;x&#39;, 2);
		 * </code></pre>
		 * 
		 * @param variableName - the name of variable for which the coefficient is being set
		 * @param coefficient - coefficient being set
		 * 
		 * @returns this linear optimization constraint
		 */
		setCoefficient(
			variableName: string,
			coefficient: Number
		): LinearOptimizationService.LinearOptimizationConstraint

	}

	class LinearOptimizationEngine {
		private constructor();

		/**
		 * Adds a new linear constraint in the model. The upper and lower bound of the constraint are
		 * defined at creation time. Coefficients for the variables are defined via calls to <code><a target='_blank' href='https://developers.google.com/apps-script/reference/optimization/linear-optimization-constraint.html#setCoefficient(String,Number)'>LinearOptimizationConstraint.setCoefficient(variableName, coefficient)</a></code>.
		 * 
		 * <pre class="prettyprint"><code>
		 * var engine = LinearOptimizationService.createEngine();
		 * 
		 * // Create a linear constraint with the bounds 0 and 10
		 * var constraint = engine.addConstraint(0, 10);
		 * 
		 * // Create a variable so we can add it to the constraint
		 * engine.addVariable(&#39;x&#39;, 0, 5);
		 * 
		 * // Set the coefficient of the variable in the constraint. The constraint is now:
		 * // 0 &lt;= 2 * x &lt;= 5
		 * constraint.setCoefficient(&#39;x&#39;, 2);
		 * </code></pre>
		 * 
		 * @param lowerBound - lower bound of the constraint
		 * @param upperBound - upper bound of the constraint
		 * 
		 * @returns the constraint created
		 */
		addConstraint(
			lowerBound: Number,
			upperBound: Number
		): LinearOptimizationService.LinearOptimizationConstraint
		/**
		 * Adds constraints in batch to the model.
		 * 
		 * <pre class="prettyprint"><code>
		 * var engine = LinearOptimizationService.createEngine();
		 * 
		 * // Add a boolean variable &#39;x&#39; (integer &gt;= 0 and &lt;= 1) and a real (continuous &gt;= 0 and &lt;= 100)
		 * variable &#39;y&#39;.
		 * engine.addVariables([&#39;x&#39;, &#39;y&#39;], [0, 0], [1, 100],
		 *     [LinearOptimizationService.VariableType.INTEGER,
		 *         LinearOptimizationService.VariableType.CONTINUOUS]);
		 * 
		 * // Adds two constraints:
		 * //   0 &lt;= x + y &lt;= 3
		 * //   1 &lt;= 10 * x - y &lt;= 5
		 * engine.addConstraints([0.0, 1.0], [3.0, 5.0], [[&#39;x&#39;, &#39;y&#39;], [&#39;x&#39;, &#39;y&#39;]], [[1, 1], [10, -1]]);
		 * </code></pre>
		 * 
		 * @param lowerBounds - lower bounds of the constraints
		 * @param upperBounds - upper bounds of the constraints
		 * @param variableNames - the names of variables for which the coefficients are being set
		 * @param coefficients - coefficients being set
		 * 
		 * @returns a linear optimization engine
		 */
		addConstraints(
			lowerBounds: Number[],
			upperBounds: Number[],
			variableNames: string[][],
			coefficients: Number[][]
		): LinearOptimizationService.LinearOptimizationEngine
		/**
		 * Adds a new continuous variable to the model. The variable is referenced by its name. The type
		 * is set to <code><a target='_blank' href='https://developers.google.com/apps-script/reference/optimization/variable-type.html#CONTINUOUS'>VariableType.CONTINUOUS</a></code>.
		 * 
		 * <pre class="prettyprint"><code>
		 * var engine = LinearOptimizationService.createEngine();
		 * var constraint = engine.addConstraint(0, 10);
		 * 
		 * // Add a boolean variable (integer &gt;= 0 and &lt;= 1)
		 * engine.addVariable(&#39;x&#39;, 0, 1, LinearOptimizationService.VariableType.INTEGER);
		 * 
		 * // Add a real (continuous) variable. Notice the lack of type specification.
		 * engine.addVariable(&#39;y&#39;, 0, 100);
		 * </code></pre>
		 * 
		 * @param name - unique name of the variable
		 * @param lowerBound - lower bound of the variable
		 * @param upperBound - upper bound of the variable
		 * 
		 * @returns a linear optimization engine
		 */
		addVariable(
			name: string,
			lowerBound: Number,
			upperBound: Number
		): LinearOptimizationService.LinearOptimizationEngine
		/**
		 * Adds a new variable to the model. The variable is referenced by its name.
		 * 
		 * <pre class="prettyprint"><code>
		 * var engine = LinearOptimizationService.createEngine();
		 * var constraint = engine.addConstraint(0, 10);
		 * 
		 * // Add a boolean variable (integer &gt;= 0 and &lt;= 1)
		 * engine.addVariable(&#39;x&#39;, 0, 1, LinearOptimizationService.VariableType.INTEGER);
		 * 
		 * // Add a real (continuous) variable
		 * engine.addVariable(&#39;y&#39;, 0, 100, LinearOptimizationService.VariableType.CONTINUOUS);
		 * </code></pre>
		 * 
		 * @param name - unique name of the variable
		 * @param lowerBound - lower bound of the variable
		 * @param upperBound - upper bound of the variable
		 * @param type - type of the variable, can be one of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/optimization/variable-type.html'>VariableType</a></code>
		 * 
		 * @returns a linear optimization engine
		 */
		addVariable(
			name: string,
			lowerBound: Number,
			upperBound: Number,
			type: LinearOptimizationService.VariableType
		): LinearOptimizationService.LinearOptimizationEngine
		/**
		 * Adds a new variable to the model. The variable is referenced by its name.
		 * 
		 * <pre class="prettyprint"><code>
		 * var engine = LinearOptimizationService.createEngine();
		 * var constraint = engine.addConstraint(0, 10);
		 * 
		 * // Add a boolean variable (integer &gt;= 0 and &lt;= 1)
		 * engine.addVariable(&#39;x&#39;, 0, 1, LinearOptimizationService.VariableType.INTEGER, 2);
		 * // The objective is now 2 * x.
		 * 
		 * // Add a real (continuous) variable
		 * engine.addVariable(&#39;y&#39;, 0, 100, LinearOptimizationService.VariableType.CONTINUOUS, -5);
		 * // The objective is now 2 * x - 5 * y.
		 * </code></pre>
		 * 
		 * @param name - unique name of the variable
		 * @param lowerBound - lower bound of the variable
		 * @param upperBound - upper bound of the variable
		 * @param type - type of the variable, can be one of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/optimization/variable-type.html'>VariableType</a></code>
		 * @param objectiveCoefficient - objective coefficient of the variable
		 * 
		 * @returns a linear optimization engine
		 */
		addVariable(
			name: string,
			lowerBound: Number,
			upperBound: Number,
			type: LinearOptimizationService.VariableType,
			objectiveCoefficient: Number
		): LinearOptimizationService.LinearOptimizationEngine

		/**
		 * Adds variables in batch to the model. The variables are referenced by their names.
		 * 
		 * <pre class="prettyprint"><code>
		 * var engine = LinearOptimizationService.createEngine();
		 * 
		 * // Add a boolean variable &#39;x&#39; (integer &gt;= 0 and &lt;= 1) and a real (continuous &gt;=0 and &lt;= 100)
		 * // variable &#39;y&#39;.
		 * engine.addVariables([&#39;x&#39;, &#39;y&#39;], [0, 0], [1, 100],
		 *     [LinearOptimizationService.VariableType.INTEGER,
		 *         LinearOptimizationService.VariableType.CONTINUOUS]);
		 * </code></pre>
		 * 
		 * @param names - unique names of the variables
		 * @param lowerBounds - lower bounds of the variables
		 * @param upperBounds - upper bounds of the variables
		 * @param types - types of the variables, can be one of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/optimization/variable-type.html'>VariableType</a></code>
		 * @param objectiveCoefficients - objective coefficients of the variables
		 * 
		 * @returns a linear optimization engine
		 */
		addVariables(
			names: string[],
			lowerBounds: Number[],
			upperBounds: Number[],
			types: LinearOptimizationService.VariableType[],
			objectiveCoefficients: Number[]
		): LinearOptimizationService.LinearOptimizationEngine
		/**
		 * Sets the optimization direction to maximizing the linear objective function.
		 * 
		 * <pre class="prettyprint"><code>
		 * var engine = LinearOptimizationService.createEngine();
		 * 
		 * // Add a real (continuous) variable. Notice the lack of type specification.
		 * engine.addVariable(&#39;y&#39;, 0, 100);
		 * 
		 * // Set the coefficient of &#39;y&#39; in the objective.
		 * // The objective is now 5 * y
		 * engine.setObjectiveCoefficient(&#39;y&#39;, 5);
		 * 
		 * // We want to maximize.
		 * engine.setMaximization();
		 * </code></pre>
		 * 
		 * @returns a linear optimization engine
		 */
		setMaximization(): LinearOptimizationService.LinearOptimizationEngine
		/**
		 * Sets the optimization direction to minimizing the linear objective function.
		 * 
		 * <pre class="prettyprint"><code>
		 * var engine = LinearOptimizationService.createEngine();
		 * 
		 * // Add a real (continuous) variable. Notice the lack of type specification.
		 * engine.addVariable(&#39;y&#39;, 0, 100);
		 * 
		 * // Set the coefficient of &#39;y&#39; in the objective.
		 * // The objective is now 5 * y
		 * engine.setObjectiveCoefficient(&#39;y&#39;, 5);
		 * 
		 * // We want to minimize
		 * engine.setMinimization();
		 * </code></pre>
		 * 
		 * @returns a linear optimization engine
		 */
		setMinimization(): LinearOptimizationService.LinearOptimizationEngine
		/**
		 * Sets the coefficient of a variable in the linear objective function.
		 * 
		 * <pre class="prettyprint"><code>
		 * var engine = LinearOptimizationService.createEngine();
		 * 
		 * // Add a real (continuous) variable. Notice the lack of type specification.
		 * engine.addVariable(&#39;y&#39;, 0, 100);
		 * 
		 * // Set the coefficient of &#39;y&#39; in the objective.
		 * // The objective is now 5 * y
		 * engine.setObjectiveCoefficient(&#39;y&#39;, 5);
		 * </code></pre>
		 * 
		 * @param variableName - name of variable for which the coefficient is being set
		 * @param coefficient - coefficient of the variable in the objective function
		 * 
		 * @returns a linear optimization engine
		 */
		setObjectiveCoefficient(
			variableName: string,
			coefficient: Number
		): LinearOptimizationService.LinearOptimizationEngine
		/**
		 * Solves the current linear program with the default deadline of 30 seconds. Returns the solution found.
		 * 
		 * <pre class="prettyprint"><code>
		 * var engine = LinearOptimizationService.createEngine();
		 * 
		 * // Add variables, constraints and define the objective with addVariable(), addConstraint(), etc
		 * engine.addVariable(&#39;x&#39;, 0, 10);
		 * 
		 * // ...
		 * 
		 * // Solve the linear program
		 * var solution = engine.solve();
		 * if (!solution.isValid()) {
		 *   throw &#39;No solution &#39; + solution.getStatus();
		 * }
		 * Logger.log(&#39;Value of x: &#39; + solution.getVariableValue(&#39;x&#39;));
		 * </code></pre>
		 * 
		 * @returns solution of the optimization
		 */
		solve(): LinearOptimizationService.LinearOptimizationSolution
		/**
		 * Solves the current linear program. Returns the solution found. and if it is an optimal
		 * solution.
		 * 
		 * <pre class="prettyprint"><code>
		 * var engine = LinearOptimizationService.createEngine();
		 * 
		 * // Add variables, constraints and define the objective with addVariable(), addConstraint(), etc
		 * engine.addVariable(&#39;x&#39;, 0, 10);
		 * 
		 * // ...
		 * 
		 * // Solve the linear program
		 * var solution = engine.solve(300);
		 * if (!solution.isValid()) {
		 *   throw &#39;No solution &#39; + solution.getStatus();
		 * }
		 * Logger.log(&#39;Value of x: &#39; + solution.getVariableValue(&#39;x&#39;));
		 * </code></pre>
		 * 
		 * @param seconds - deadline for solving the problem, in seconds; the maximum deadline is 300 seconds
		 * 
		 * @returns solution of the optimization
		 */
		solve(
			seconds: Number
		): LinearOptimizationService.LinearOptimizationSolution


	}

	class LinearOptimizationSolution {
		private constructor();

		/**
		 * Gets the value of the objective function in the current solution.
		 * 
		 * <pre class="prettyprint"><code>
		 * var engine = LinearOptimizationService.createEngine();
		 * 
		 * // Add variables, constraints and define the objective with addVariable(), addConstraint(), etc
		 * engine.addVariable(&#39;x&#39;, 0, 10);
		 * 
		 * // ...
		 * 
		 * // Solve the linear program
		 * var solution = engine.solve();
		 * Logger.log(&#39;ObjectiveValue: &#39; + solution.getObjectiveValue());
		 * </code></pre>
		 * 
		 * @returns the value of the objective function
		 */
		getObjectiveValue(): Number
		/**
		 * Gets the status of the solution. Before solving a problem, the status will be <code>NOT_SOLVED</code>.
		 * 
		 * <pre class="prettyprint"><code>
		 * var engine = LinearOptimizationService.createEngine();
		 * 
		 * // Add variables, constraints and define the objective with addVariable(), addConstraint(), etc
		 * engine.addVariable(&#39;x&#39;, 0, 10);
		 * 
		 * // ...
		 * 
		 * // Solve the linear program
		 * var solution = engine.solve();
		 * if (solution.getStatus() != LinearOptimizationService.Status.FEASIBLE &amp;&amp;
		 *     solution.getStatus() != LinearOptimizationService.Status.OPTIMAL) {
		 *   throw &#39;No solution &#39; + status;
		 * }
		 * Logger.log(&#39;Status: &#39; + solution.getStatus());
		 * </code></pre>
		 * 
		 * @returns the status of the solver
		 */
		getStatus(): LinearOptimizationService.Status
		/**
		 * Gets the value of a variable in the solution created by the last call to <code><a target='_blank' href='https://developers.google.com/apps-script/reference/optimization/linear-optimization-engine.html#solve()'>LinearOptimizationEngine.solve()</a></code>.
		 * 
		 * <pre class="prettyprint"><code>
		 * var engine = LinearOptimizationService.createEngine();
		 * 
		 * // Add variables, constraints and define the objective with addVariable(), addConstraint(), etc
		 * engine.addVariable(&#39;x&#39;, 0, 10);
		 * 
		 * // ...
		 * 
		 * // Solve the linear program
		 * var solution = engine.solve();
		 * Logger.log(&#39;Value of x: &#39; + solution.getVariableValue(&#39;x&#39;));
		 * </code></pre>
		 * 
		 * @param variableName - name of the variable
		 * 
		 * @returns the value of the variable in the solution
		 */
		getVariableValue(
			variableName: string
		): Number
		/**
		 * Determines whether the solution is either feasible or optimal.
		 * 
		 * <pre class="prettyprint"><code>
		 * var engine = LinearOptimizationService.createEngine();
		 * 
		 * // Add variables, constraints and define the objective with addVariable(), addConstraint(), etc
		 * engine.addVariable(&#39;x&#39;, 0, 10);
		 * 
		 * // ...
		 * 
		 * // Solve the linear program
		 * var solution = engine.solve();
		 * if (!solution.isValid()) {
		 *   throw &#39;No solution &#39; + status;
		 * }
		 * </code></pre>
		 * 
		 * @returns <code>true</code> if the solution is valid (<code><a target='_blank' href='https://developers.google.com/apps-script/reference/optimization/status.html#FEASIBLE'>Status.FEASIBLE</a></code> or
		 *     <code><a target='_blank' href='https://developers.google.com/apps-script/reference/optimization/status.html#OPTIMAL'>Status.OPTIMAL</a></code>); <code>false</code> if not
		 */
		isValid(): Boolean

	}

	enum Status {
		/**
		 * Status when it failed to find a solution for unexpected reasons.
		 */
		ABNORMAL = "ABNORMAL",
		/**
		 * Status when a feasible (not necessarily optimal) solution has been found.
		 */
		FEASIBLE = "FEASIBLE",
		/**
		 * Status when the current model is unfeasible (has no solution).
		 */
		INFEASIBLE = "INFEASIBLE",
		/**
		 * Status when the model is invalid.
		 */
		MODEL_INVALID = "MODEL_INVALID",
		/**
		 * Status when <code><a target='_blank' href='https://developers.google.com/apps-script/reference/optimization/linear-optimization-engine.html#solve()'>LinearOptimizationEngine.solve()</a></code> has not been called yet.
		 */
		NOT_SOLVED = "NOT_SOLVED",
		/**
		 * Status when an optimal solution has been found.
		 */
		OPTIMAL = "OPTIMAL",
		/**
		 * Status when the current model is unbound.
		 */
		UNBOUNDED = "UNBOUNDED",
	}

	enum VariableType {
		/**
		 * Type of variable that can take any real value.
		 */
		CONTINUOUS = "CONTINUOUS",
		/**
		 * Type of variable that can only take integer values.
		 */
		INTEGER = "INTEGER",
	}

}
